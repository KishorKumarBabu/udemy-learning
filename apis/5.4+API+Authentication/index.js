import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  const response=await axios.get("https://secrets-api.appbrewery.com/random")
  const result=response.data
  res.render("index.ejs",{
    content:JSON.stringify(result)
  })
  
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 const response=await axios.get("https://secrets-api.appbrewery.com/all?page=1",{
  auth:{
    username:"kishor",
    password:"kishor"
  }
 })
  const result=response.data
  res.render("index.ejs",{
    content:JSON.stringify(result)
  })
  

});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
   const response=await axios.get("https://secrets-api.appbrewery.com/filter",{
  params:{
    apiKey:"ef66b35b-0c79-4f0e-8ad1-dff3b9a8d884",
    score:5
  }
 })
  const result=response.data
  res.render("index.ejs",{
    content:JSON.stringify(result)
  })
});

app.get("/bearerToken",async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
    const response=await axios.get("https://secrets-api.appbrewery.com/secrets/1",{
  headers:{
    Authorization:`Bearer 70cf2252-fc56-4fe8-8be1-2b34282bd948`
  }
 })
  const result=response.data
  res.render("index.ejs",{
    content:JSON.stringify(result)
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
