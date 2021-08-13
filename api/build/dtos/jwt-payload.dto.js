"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTPayloadDTO = void 0;
class JWTPayloadDTO {
    constructor(payload) {
        this._id = payload._id;
        this.username = payload.username;
    }
}
exports.JWTPayloadDTO = JWTPayloadDTO;
//# sourceMappingURL=jwt-payload.dto.js.map