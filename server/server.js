// Makes it possible to use and manage the environmental variables we establish //
require("dotenv").config();
// Creates and initializes the express app, and assigns it to our designated PORT //
const express = require("express");
const app = express();

app.get("/stocks", (req, res) => {
  console.log("Get all restaurants");
})

// Use env variable, else use PORT 3002 //
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is up and listening on PORT ${PORT}`);
});
