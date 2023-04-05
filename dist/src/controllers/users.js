"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../helpers/response"));
const users_1 = __importDefault(require("../models/users"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield users_1.default.createModel(body);
        return response_1.default.success(res, 200, {
            message: 'Create User is Successfull'
        });
    }
    catch (error) {
        response_1.default.error(res, 500, error);
    }
});
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchUsers = yield users_1.default.listUsers();
        const result = fetchUsers.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        return response_1.default.success(res, 200, result);
    }
    catch (error) {
        response_1.default.error(res, 500, error);
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params } = req;
    const { id } = params;
    try {
        const result = yield users_1.default.getUserById(id);
        if (!result.exists())
            return response_1.default.error(res, 400, 'User not found!');
        return response_1.default.success(res, 200, Object.assign({ id: result.id }, result.data()));
    }
    catch (error) {
        response_1.default.error(res, 500, error);
    }
});
const patchUsersBYID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const { id } = params;
    try {
        const getUserById = yield users_1.default.getUserById(id);
        if (!getUserById.exists())
            return response_1.default.error(res, 400, 'User not Found');
        yield users_1.default.updateUserById(id, body);
        return response_1.default.success(res, 200, {
            message: 'Update user is Successfull'
        });
    }
    catch (error) {
        response_1.default.error(res, 500, error);
    }
});
const deleteUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getUserById = yield users_1.default.getUserById(id);
        if (!getUserById.exists())
            return response_1.default.error(res, 400, 'User not Found');
        yield users_1.default.deleteUserByID(id);
        return response_1.default.success(res, 200, {
            message: 'Delete User is Successfull'
        });
    }
    catch (error) {
        response_1.default.error(res, 500, error);
    }
});
exports.default = {
    createUser,
    listUsers,
    getUserById,
    patchUsersBYID,
    deleteUserByID
};
//# sourceMappingURL=users.js.map