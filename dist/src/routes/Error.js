"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const response_1 = __importDefault(require("../helpers/response"));
const errorRoute = express_1.default.Router();
errorRoute.use((req, res, next) => {
    next((0, http_errors_1.default)((0, http_errors_1.default)(404)));
});
errorRoute.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    response_1.default.error(res, 404, 'Path not Found');
    next();
});
exports.default = errorRoute;
//# sourceMappingURL=Error.js.map