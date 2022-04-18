const Router = require('koa-router')
const { create, list } = require('../controller/gameQuestion.controller')
const { verifyAuth, verifyAdmin } = require('../middleware/auth.middleware')
const gameQuestionRouter = new Router({ prefix: '/gameQuestion' })

gameQuestionRouter.post('/', verifyAuth, verifyAdmin, create)
gameQuestionRouter.get('/', list)

module.exports = gameQuestionRouter
