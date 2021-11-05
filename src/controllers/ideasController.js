const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { title, category, link_image, description, link_idea } = request.body

        await connection('ideas').insert({
            title,
            category,
            link_image,
            description,
            link_idea
        })

        return response.status(201).json({
            message: 'success'
        })
    }
}