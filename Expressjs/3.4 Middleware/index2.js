import express from "express";
import morgen from "morgan"
const app = express();
const port = 3000;
app.use(morgen("dev"))
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
