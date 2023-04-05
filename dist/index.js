"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const env_1 = __importDefault(require("./src/helpers/env"));
const routes_1 = __importDefault(require("./src/routes"));
const server = (0, express_1.default)();
const logger = (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms");
server.listen(env_1.default.PORT, () => {
    console.log("Server is Connected on Port : ", env_1.default.PORT);
});
server.use((0, cors_1.default)({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(logger);
server.use(express_1.default.json());
server.use(routes_1.default);
//# sourceMappingURL=index.js.map