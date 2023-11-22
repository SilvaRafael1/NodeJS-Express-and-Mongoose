// Importando as dependências do projeto
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors")

const app = express();
const uri = "mongodb://127.0.0.1:27017";

mongoose.connect(uri, { dbName: "db_IFRS" });
requireDir("./models");

app.use(cors())
app.use(express.json())
app.use("/api", require("./routes"));

app.listen(3000, () => {
  console.log("Exemplo de aplicativo ouvindo a porta 3000");
});
