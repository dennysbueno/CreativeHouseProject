const express = require('express')
const router = require('./routers')
const { errors } = require('celebrate')

const app = express()
app.use(express.json()) //comando para o app entender JSON

app.use(router)
app.use(errors())
app.listen(3333)