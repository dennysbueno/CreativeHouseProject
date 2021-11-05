const express = require('express')
const router = require('./routers')

const app = express()
app.use(express.json()) //comando para o app entender JSON

app.use(router)
app.listen(3333)