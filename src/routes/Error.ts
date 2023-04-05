import express, { Request, Response } from "express";
import { request } from "http";
import createError from 'http-errors'
import response from "../helpers/response";

const errorRoute = express.Router()

errorRoute.use((req:Request, res:Response, next:Function) => {
    next(createError(createError(404)));
})

errorRoute.use((err:Error, req:Request, res:Response, next:Function) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    response.error(res, 404, 'Path not Found')
    next()
})

export default errorRoute;