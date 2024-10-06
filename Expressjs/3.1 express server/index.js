import express from "express";
const app = express();
const port = 3000;
// http request
app.get("/", (req, res) => {
  res.send("<h1>Helllow kfdkffhsnjkdgf</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>about us</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>contact us</h1><p>phone:1235566</p>");
  });
  
app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
