"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
let handler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
exports.handler = handler;
