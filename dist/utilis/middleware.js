"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware = (req, res, next) => {
    console.log(`user requested access to ${req.query.imageName}  height ${req.query.height}  width ${req.query.width}`);
    next();
};
exports.default = middleware;
