//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";
const port = 3000;
const app = express();
var athentication = false;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
function check(req, res, next) {
  const password = req.body["password"];
  var orgpass = "kishor";
  if (password == orgpass) {
    athentication = true;
  }
  next()
}

app.use(check);

app.post("/check",(req,res)=>{
    if(athentication){
    res.sendFile(__dirname+"/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
