//carregando módulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const app = express()
const mongoose = require("mongoose")










const PORT = 3000
app.listen(PORT, () => {
    console.log("servidor rodando no localhost:3000")
})