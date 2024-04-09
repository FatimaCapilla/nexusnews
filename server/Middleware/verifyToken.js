"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var verifyToken = function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, config_1.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
};
exports.verifyToken = verifyToken;
