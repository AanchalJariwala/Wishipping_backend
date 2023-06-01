const express = require('express');
const axios = require('axios');
const https = require('https');
const file = require("fs")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { users } = require('./users');
const { checkout } = require('./checkout');
const { products } = require('./products');

const secretKey = "this_is_a_secret_key_which_should_not_be_shared_publically";

const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(cors());

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

app.get('/payment/:id', (req, res) => {
    const invoiceId = req.params['id'];

    doApiCall(invoiceId)
        .then(response => {
            //res.status(200).json(response.data);
            res.status(400).json({ ...response.data, message: 'hello World' });
        })
        .catch(error => {
            console.log("error", error);
            res.status(500).json({ error: "Something bad happened" })
        });
    });

    app.get("/filesync", (req, res) => {
        const fileContent = file.readFileSync('response.json');
        res.write(fileContent);
        res.end();
    });

    app.get("/file", (req, res) => {

        file.readFile('response.json', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(data);
            return res.end();
        });
    });

app.get("/hello", (req, res) => {
    file.readFile('Hello.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

app.get("/sayhello/:id", (req, res) => {

    const pathId = req.params['id'];
    const name = req.query["name"];
    const headerValue = req.headers["content-type"];

    res.send("Hello World : " + req.params['id'] + " " + name + " " + headerValue);
});

app.post("/login", (req, res) => {

    const username = req.body.username;

    if (!username) {
        res.status(400).json({
            message: "username is required"
        });
        return;
    }

    const password = req.body.password;
    if (!password) {
        res.status(400).json({
            message: "password is required"
        });
        return;
    }

    console.log(users);

    const user = users.find(user => user.password == password && user.username == username);

    if (!user) {
        res.status(404).json({
            message: "user not found"
        });
        return;
    }

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        sub: username,
        
    }, secretKey);

    res.json({
        token
    });
});

app.post("/Checkout", (req, res) => {

    const firstName = req.body.firstName;
    if (!firstName) {
        res.status(400).json({
            message: "FirstName is required"
        });
        return;
    }

    const lastName = req.body.lastName;
    if (!lastName) {
        res.status(400).json({
            message: "LastName is required"
        });
        return;
    }

    const email = req.body.email;
    if (!email) {
        res.status(400).json({
            message: "Email is required"
        });
        return;
    }

    const address1 = req.body.address1;
    if (!address1) {
        res.status(400).json({
            message: "Address1 is required"
        });
        return;
    }

    const address2 = req.body.address2;
    if (!address2) {
        res.status(400).json({
            message: "Address2 is required"
        });
        return;
    }
    const city= req.body.city;
    if (!city) {
        res.status(400).json({
            message: "City is required"
        });
        return;
    }
    const state = req.body.state;
    if (!state) {
        res.status(400).json({
            message: "state is required"
        });
        return;
    }

    const country = req.body.country;
    if (!country) {
        res.status(400).json({
            message: "Country is required"
        });
        return;
    }

    const zip = req.body.zip;
    if (!zip) {
        res.status(400).json({
            message: "Postal Code is required"
        });
        return;
    }
    const cardno = req.body.cardno;
    if (!cardno) {
        res.status(400).json({
            message: "Card Number is required"
        });
        return;
    }
    
    const bzip = req.body.bzip;
    if (!bzip) {
        res.status(400).json({
            message: "Billing Zip Code is required"
        });
        return;
    }
    
    const expmonth = req.body.expmonth;
    if (!expmonth) {
        res.status(400).json({
            message: "Card Expiry month is required"
        });
        return;
    }

    const expyear = req.body.expyear;
    if (!expyear) {
        res.status(400).json({
            message: "Card Expiry year is required"
        });
        return;
    }
    
    const cvc= req.body.cvc;
    if (!cvc) {
        res.status(400).json({
            message: "CVC is required"
        });
        return;
    }

    console.log(checkout);

    const check = checkout.find(check => check.firstName== firstName && check.lastName ==lastName && check.email==email
        && check.address1==address1 && check.address2==address2 && check.city==city && check.state==state 
        && check.country==country && check.zip==zip && check.cardno==cardno && check.bzip==bzip 
        && check.expmonth==expmonth && check.expyear==expyear && check.cvc==cvc);

    if (!check) {
        res.status(404).json({
            message: "User not registered"
        });
        return;
    }

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        sub: firstName,
        
    }, secretKey);

    res.json({
        token
    });
});

/** Authenticated APIs */
/*
app.use((req, res, next) => {
    const authorizationHeader = req.headers['authorization'];

    if(!authorizationHeader) {
        res.status(403).json({
            error: 'user is not authorized'
        });
        return;
    }

    const token = authorizationHeader.substring("Bearer ".length)

    var verifiedPayload = undefined;

    try{
        verifiedPayload = jwt.verify(token, secretKey);
    }catch(e) {
        if(e.name == "TokenExpiredError") {
            res.status(401).json({error: 'user token is expired'});
            return;
        }
        res.status(403).json({error: 'user token is not valid'});
        return;
    }
    next();
});
*/


app.get("/products", (req, res) =>  {
    res.json({products});
});

app.listen(8001, () => {
    console.log("started");
})