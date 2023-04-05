"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_1 = __importDefault(require("../helpers/response"));
const users_1 = __importDefault(require("./users"));
const Error_1 = __importDefault(require("./Error"));
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    response_1.default.success(res, 200, 'Wellcome to Firebase Api CRUD');
    next();
});
router.use('/users', users_1.default);
router.use(Error_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map