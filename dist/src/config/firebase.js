"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("../helpers/env"));
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: env_1.default.apiKey,
    authDomain: env_1.default.authDomain,
    databaseURL: env_1.default.databaseURL,
    projectId: env_1.default.projectId,
    storageBucket: env_1.default.storageBucket,
    messagingSenderId: env_1.default.messagingSenderId,
    appId: env_1.default.appId,
    measurementId: env_1.default.measurementId
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.default = db;
//# sourceMappingURL=firebase.js.map