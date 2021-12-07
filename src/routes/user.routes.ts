import { Router } from "express";

const userRoutes = Router();

userRoutes.get('/signin', (request, response)=> {

    response.status(200).send({mensagem: 'Rota ok'})
})

export { userRoutes }