const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("pagina principal da calculadora")
})

router.get("/soma", (req, res) => {
    res.send("página de soma de numeros")
})

router.get("/subtracao", (req, res) => {
    res.send("página de subtração de numeros")
})

router.get("/divisao", (req, res) => {
    res.send("pagina de divisao de numeros")
})

router.get("/multiplicacao", (req, res) => {
    res.send("pagina de multiplicaçao de numeros")
})

module.exports = router