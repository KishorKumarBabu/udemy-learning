import express from "express";

const app = express();
const port = 3000;
const http= (req, res, next)=>{
console.log("Request recived:", req.method)
console.log("Request url:", req.url)

next();
}
app.use(http)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
