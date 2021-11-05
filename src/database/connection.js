const knex = require('knex') //importa o knex

const config = require('../../knexfile') //importa as configurações do knex

const connection = knex(config.development) //faz a conexao com o banco

module.exports = connection //exporta a conexao para arquivos externos