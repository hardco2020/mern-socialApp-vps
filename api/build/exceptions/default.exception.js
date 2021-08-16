"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultException = void 0;
const DefaultException = (err, req, res, next) => res.status(err.status).json(err);
exports.DefaultException = DefaultException;
//# sourceMappingURL=default.exception.js.map