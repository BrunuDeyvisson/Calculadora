//carregando módulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const app = express()
const mongoose = require("mongoose")

 //body-parser
 app.use(bodyparser.urlencoded({extended: true}))
 app.use(bodyparser.json)
//handlebars
 app.engine('handlebars', handlebars({defaultLayout: 'main'}))
 app.set('view engine', 'handlebars')
//mongoose

//








const PORT = 3000
app.listen(PORT, () => {
    console.log("servidor rodando no localhost:3000")
})