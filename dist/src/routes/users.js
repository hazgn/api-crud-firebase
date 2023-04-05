"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const userRouter = express_1.default.Router();
userRouter.post('/', users_1.default.createUser);
userRouter.get('/', users_1.default.listUsers);
userRouter.get('/find/:id', users_1.default.getUserById);
userRouter.patch('/update/:id', users_1.default.patchUsersBYID);
userRouter.delete('/delete/:id', users_1.default.deleteUserByID);
exports.default = userRouter;
//# sourceMappingURL=users.js.map