import { Router } from "express";

import HelloController from "./controllers/HelloController";
import UsersControllers from "./controllers/UsersControllers";


const routes = new Router()

routes.get ('/hello',HelloController.index)

routes.get('/users',UsersControllers.index)
routes.get('/users/:id',UsersControllers.show)
routes.post('/users',UsersControllers.create)
routes.put('/users/:id',UsersControllers.update)
routes.delete('/users/:id',UsersControllers.destroy)


export default routes;


