//creating a basic api with static data
const http = require("http");
http.createServer((req,res)=>{
    //create header and mention return type
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Devendra',email:'dev@gmail.com',age:22}));
    res.end();
    console.log("start server on post: http://localhost:4000");

}).listen(4000);

// after running url: http://localhost:4000/
/* Resule:
        {
        "name": "Devendra",
        "email": "dev@gmail.com",
        "age": 22
        }
*/