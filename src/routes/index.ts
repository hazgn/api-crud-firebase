import express, { Request, Response } from "express";
import response from "../helpers/response";
import userRouter from "./users";
import errorRoute from "./Error";

const router = express.Router()

router.get("/", (req:Request, res:Response, next:Function) => {
    response.success(res, 200, 'Wellcome to Firebase Api CRUD');
    next();
});
router.use('/users', userRouter);
router.use(errorRoute);

export default router;