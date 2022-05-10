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
    },

    async index(request, response) {
        const ideas = await connection('ideas').select('*').orderBy('id', 'desc')

        return response.json(ideas)
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('ideas').where('id', id).delete()

        return response.status(204).send()
    },
    
    async show(request, response){
        const { id } = request.params

        const idea = await connection('ideas').select('*').where('id', id)

        return response.json(idea)
    },

    async update(request, response){
        const { id } = request.params

        const data = request.body

        await connection('ideas').where('id', id).update(data)

        return response.json({message: "success"})
   
    }   
}