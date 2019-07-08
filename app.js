const express = require("express");
const app = express();
const port = 3000;
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.get("/api/certificados", (req, res) => {
  sleep(10000).then(() => {
    res.status(200);
    res.send("Certificados");
  });
});

app.get("/api/contratos", (req, res) => {
  sleep(10000).then(() => {
    res.status(200);
    res.send("Contratos");
  });
});

app.get("/api/clientes", (req, res) => {
  sleep(20000).then(() => {
    res.status(200);
    res.send("Clientes");
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
