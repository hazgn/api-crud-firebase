"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const firebase_1 = __importDefault(require("../config/firebase"));
const userCollections = (0, firestore_1.collection)(firebase_1.default, 'users');
const userDoc = (id) => {
    return (0, firestore_1.doc)(firebase_1.default, 'users', id);
};
const createModel = (body) => {
    return (0, firestore_1.addDoc)(userCollections, body);
};
const listUsers = () => {
    return (0, firestore_1.getDocs)(userCollections);
};
const getUserById = (id) => {
    return (0, firestore_1.getDoc)(userDoc(id));
};
const updateUserById = (id, body) => {
    return (0, firestore_1.updateDoc)(userDoc(id), body);
};
const deleteUserByID = (id) => {
    return (0, firestore_1.deleteDoc)(userDoc(id));
};
exports.default = {
    createModel,
    listUsers,
    getUserById,
    updateUserById,
    deleteUserByID
};
//# sourceMappingURL=users.js.map