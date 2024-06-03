//curd with file system (write,rename,read,delete files)
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname,"curd");//for getting curd folder complete path.
const fileName = `${dirPath}/filename.txt`;

//create new files with content put
    fs.writeFileSync(fileName,"this is my file content output");

//for reading file content
    /*
    fs.readFile(fileName,'utf8',(error,filedata)=>{
        console.log(filedata);
    })
    */

//update content in a file
    /*
    fs.appendFile(fileName,' and this is my new content store in a file',(error)=> {
        if(!error) {
            console.log("File updated successfully");
        } else {
            console.log("Error: "+error);
        }
    })
    */

//rename the filename.txt to fileNewname.txt
    /*
    fs.rename(fileName,`${dirPath}/fileNewname.txt`,(error)=> {
        if(!error) {
            console.log("File renamed successfully");
        } else {
            console.log("Error: "+error);
        }
    });
    */

//delete any files
    //fs.unlinkSync(`${dirPath}/fileNewname.txt`);