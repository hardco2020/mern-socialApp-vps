"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const user_service_1 = require("./user.service");
const jwt_payload_dto_1 = require("../../../dtos/jwt-payload.dto");
class UserController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.userSvc = new user_service_1.UserService();
    }
    async updateUser(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        console.log(req.body);
        const dto = await this.userSvc.updateUser(payload, req.body);
        return this.formatResponse(dto, 200);
    }
    async getUser(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const userId = req.query.userId;
        const username = req.query.username;
        const dto = userId
            ? await this.userSvc.getUserbyId(userId)
            : await this.userSvc.getUserbyUsername(username);
        return this.formatResponse(dto, 200);
    }
    async friendUser(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { id } = req.params;
        const dto = await this.userSvc.friendUser(payload._id, id);
        return this.formatResponse(dto, 200);
    }
    async unfriendUser(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { id } = req.params;
        const dto = await this.userSvc.unfriendUser(payload._id, id);
        return this.formatResponse(dto, 200);
    }
    async createPending(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { receiverId } = req.params;
        const dto = await this.userSvc.createPending(payload._id, receiverId);
        return this.formatResponse(dto, 200);
    }
    async updatePending(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { senderId } = req.params;
        const dto = await this.userSvc.updatePending(payload._id, senderId);
        return this.formatResponse(dto, 200);
    }
    async getPending(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { receiverId } = req.params;
        const dto = await this.userSvc.getPending(payload._id, receiverId);
        return this.formatResponse(dto, 200);
    }
    async deletePending(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { receiverId } = req.params;
        const dto = await this.userSvc.deletePending(payload._id, receiverId);
        return this.formatResponse(dto, 200);
    }
    async getFriends(req) {
        const id = req.params.id;
        const dto = await this.userSvc.getFriends(id);
        return this.formatResponse(dto, 200);
    }
    async searchUsers(req) {
        const key = req.params.key;
        const dto = await this.userSvc.searchUsers(key);
        return this.formatResponse(dto, 200);
    }
    async recommendUsers(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.userSvc.recommendUsers(payload._id);
        return this.formatResponse(dto, 200);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map