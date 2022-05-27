import { Request, Response } from "express";
import { Router } from "express";
import { createUserController } from '../useCases/CreateUser'

const userRoutes = Router();

userRoutes.post('/signup', (req: Request, res: Response) => {

    return createUserController.handle(req, res)

});


export { userRoutes }