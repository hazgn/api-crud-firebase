import express from "express";
import cors from 'cors';
import morgan from "morgan";

import env from "./src/helpers/env";
import router from "./src/routes";

const server = express();

const logger = morgan(":method :url :status :res[content-length] - :response-time ms");

server.listen(env.PORT, () => {
    console.log("Server is Connected on Port : ", env.PORT);
});
server.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));
server.use(express.urlencoded({extended:true}));
server.use(logger);
server.use(express.json());
server.use(router);