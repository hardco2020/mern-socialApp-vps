import { PostDocument } from "models/post.model";
export declare class PostService {
    private readonly postRepo;
    createPost(id: string, body: any): Promise<PostDocument>;
    updatePost(poster_id: string, post_id: string, body: any): Promise<any>;
    deletePost(poster_id: string, post_id: string): Promise<any>;
    likePost(payload_id: string, post_id: string): Promise<any>;
    getPost(id: string): Promise<PostDocument>;
    timelinePost(user_id: string, page: number): Promise<PostDocument[]>;
    getUserbyUsername(user_name: string): Promise<import("../../../models/local-auth.model").LocalAuthDocument | null>;
    getAllPost(user_id: string, page: number): Promise<PostDocument[]>;
    commentPost(user_name: string, user_pic: string, comment: string, date: Date, postId: string): Promise<PostDocument | null>;
}
