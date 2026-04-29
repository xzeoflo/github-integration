const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth/:secret", (req, res) => {
  const { secret } = req.params;
  
  const isAuthenticated = secret === "12345";

  if (isAuthenticated) {
    res.send("Bienvenue !");
  } else {
    res.status(401).send("Accès refusé");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});