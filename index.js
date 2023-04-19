// console.log("Hello world");
// console.log("gaurav");
// console.log(window);
// const a=16;
// console.log(a);

// node js in function variable and object all are module.

// typed of modulue
// file based, Build In , Third-party

// File based
// const b =400;
// console.log(b);

const c = {
    average: (a,b) => {
        console.log((a+b) / 2)
    },
    percent : (a,b) => {
        console.log((a/b)*100);
    }
}
console.log(typeof(c));

module.exports = c;

// ********************fs
// build
// asyncronus
// const {readFileSync} = require("fs");
// const fs = require("fs");
// const pokemon = require("pokemon");
// console.log(fs);
// fs.readFile("./sample.txt","utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// console.log("I am first");

// syncronus
// const sync = fs.readFileSync("./sample.txt","utf-8");
// console.log(sync);
// console.log("I am last");

// const g = "Hello World"
// fs.writeFile("./sample2.txt", g, ()=>{
//     console.log("Written");
// })


// **************path
// const path = require("path");
// const h = path.extname("/")
// const i = path.basename("/")
// const j = path.dirname("/")
// k = "/gaurav";
// const l = path.join("/" + k);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(l)


// ************************************os memory
// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());


// *************************Pokemon
// const Pokemon = require("pokemon");
// console.log(pokemon.random());
// console.log(pokemon.all());


// ***********************Live serever

const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

console.log(__dirname);
console.log(__filename);
const server = http.createServer((req, res ) => {

    if(req.url === "/"){
        return res.end(home);
    }

    else if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    else if(req.url === "/contact"){
        return res.end("<h1>CONTACTUS</h1>")
    }
    else if(req.url === "/service"){
        return res.end("<h1>SERVICES</h1>")
    }

    // console.log(req.url);
    else{
        return res.end("<h1>Hello World</h1>");
    }
})

server.listen(PORT, hostname, ()=> {
    console.log(`server is working on http://${hostname}:${PORT})`);
})
