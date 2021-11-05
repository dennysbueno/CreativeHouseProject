const express = require('express')

const router = express.Router()

const ideasController = require('./controllers/ideasController')

router.post('/ideas', ideasController.create)

module.exports = router