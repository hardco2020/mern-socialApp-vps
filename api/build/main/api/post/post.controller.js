"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const controller_base_1 = require("../../../bases/controller.base");
const post_service_1 = require("./post.service");
const jwt_payload_dto_1 = require("../../../dtos/jwt-payload.dto");
class PostController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.postSvc = new post_service_1.PostService();
    }
    async createPost(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const dto = await this.postSvc.createPost(payload._id, req.body);
        return this.formatResponse(dto, 201);
    }
    async updatePost(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { id } = req.params;
        console.log(req.body);
        const dto = await this.postSvc.updatePost(payload._id, id, req.body);
        return this.formatResponse(dto, 200);
    }
    async deletePost(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { id } = req.params;
        const dto = await this.postSvc.deletePost(payload._id, id);
        return this.formatResponse(dto, 200);
    }
    async likePost(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const { id } = req.params;
        const dto = await this.postSvc.likePost(payload._id, id);
        return this.formatResponse(dto, 200);
    }
    async getPost(req) {
        const { id } = req.params;
        const dto = await this.postSvc.getPost(id);
        return this.formatResponse(dto, 200);
    }
    async timelinePost(req) {
        const payload = new jwt_payload_dto_1.JWTPayloadDTO(req.payload);
        const page = parseInt(req.params.page);
        console.log(page);
        console.log(payload._id);
        const dto = await this.postSvc.timelinePost(payload._id, page);
        return this.formatResponse(dto, 200);
    }
    async getAllPost(req) {
        const user_name = req.params.username;
        const page = parseInt(req.params.page);
        console.log(user_name);
        console.log(page);
        const user = await this.postSvc.getUserbyUsername(user_name);
        const dto = await this.postSvc.getAllPost(user._id, page);
        return this.formatResponse(dto, 200);
    }
    async sendComment(req) {
        const { postId } = req.params;
        const { userName, userPic, comment, date } = req.body;
        const dto = await this.postSvc.commentPost(userName, userPic, comment, date, postId);
        return this.formatResponse(dto, 200);
    }
}
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map