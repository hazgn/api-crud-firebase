"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    success: (res, status, data) => {
        res.status(status).json({ result: data });
    },
    error: (res, status, data) => {
        const errData = new Error(data);
        res.status(status).json({ error: { message: errData.message } });
    }
};
//# sourceMappingURL=response.js.map