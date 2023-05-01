const express = require('express');
const axios = require('axios');
const https = require('https');
const file = require("fs")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { users } = require('./users');
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
        exp: Math.floor(Date.now() / 1000) + 20, //(60 * 60),
        sub: username,
        
    }, secretKey);

    res.json({
        token
    });
});

app.post("/verifyOtp", (req, res) => {
    req.
});

/** Authenticated APIs */
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


app.get("/products", (req, res) =>  {
    res.json({products});
});

app.listen(8001, () => {
    console.log("started");
})