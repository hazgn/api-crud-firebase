import { Response } from "express";

export default {
    success: (res:Response, status:number, data:any) => {
        res.status(status).json({result:data});
    },
    error: (res:Response, status:number, data:any) => {
        const errData = new Error(data);
        res.status(status).json({error:{message:errData.message}});
    }
}