const file = require("fs")

readFileAsync();


function readFileSync() {
    const fileContent = file.readFileSync('users.js');
    console.log(fileContent.toString());
    console.log("end");

}


function readFileAsync() {
    file.readFile('users.js', function (err, data) {
        console.log(data.toString());
    });
    console.log("end");
}

function sync() {

    const c1 = file.readFileSync();

    if (c1 == true) {
        const c2 = file.readFileSync();

        if (c2 == true) {
            c2_1 = file.readFileSync();
        } else {
            c2_2 = file.readFileSync();
        }
    } else {
        const c3 = file.readFileSync();
        if (c3 == true) {
            c3_1 = file.readFileSync();
        } else {
            c3_2 = file.readFileSync();
        }
    }

}

function async() {

    call1(() => {
        const value = getValue()
        call2((value) => {
            call3(() => {
                call4(() => {
                    
                })
            })
        })
    })



    // callback hell
    file.readFileAsync("", (err, c1) => {

        if (c1 == true) {
            file.readFileAsync("", (err, c2) => {
                if (c2 == true) {
                    file.readFileAsync("", (err, c2_1) => {

                    })
                } else {
                    file.readFileAsync("", (err, c2_2) => {

                    })
                }
            })

        } else {
            file.readFileAsync("", (err, c3) => {
                if (c3 == true) {
                    file.readFileAsync("", (err, c3_1) => {

                    })
                } else {
                    file.readFileAsync("", (err, c3_2) => {

                    })
                }
            })
        }

    });

}

/*
setTimeout(
    () => {
        console.log("Hello Greet");
    },
    1000 // milliseconds
);
console.log("Hello Morning");
*/

