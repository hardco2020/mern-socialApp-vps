import { ControllerBase } from '../../../bases/controller.base';
import { Request } from 'express';
import { PostDocument } from '../../../models/post.model';
import { ResponseObject } from 'common/response/response.object';
export declare class PostController extends ControllerBase {
    private readonly postSvc;
    createPost(req: Request): Promise<ResponseObject<PostDocument>>;
    updatePost(req: Request): Promise<ResponseObject<PostDocument>>;
    deletePost(req: Request): Promise<ResponseObject<string>>;
    likePost(req: Request): Promise<ResponseObject<string>>;
    getPost(req: Request): Promise<ResponseObject<PostDocument>>;
    timelinePost(req: Request): Promise<ResponseObject<PostDocument[]>>;
    getAllPost(req: Request): Promise<ResponseObject<PostDocument[]>>;
    sendComment(req: Request): Promise<ResponseObject<any>>;
}
