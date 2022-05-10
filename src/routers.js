const { celebrate, Segments, Joi } = require('celebrate')
const { Router } = require('express')

const router = Router()

const ideasController = require('./controllers/ideasController')

router.post('/ideas', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        category: Joi.string().required(),
        link_image: Joi.string().required(),
        description: Joi.string(),
        link_idea: Joi.string().required()
    })
}), ideasController.create)

router.get('/ideas', ideasController.index)

router.delete('/idea/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number()
    })
}), ideasController.delete)

router.put('/idea/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number()
    })
}), ideasController.update)

router.get('/idea/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number()
    })
}), ideasController.show)

module.exports = router