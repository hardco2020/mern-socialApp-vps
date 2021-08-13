import { PostDocument } from '../models/post.model';
export declare class PostRepository {
    createPost(id: string, body: any): Promise<PostDocument>;
    getPost(id: string): Promise<PostDocument>;
    updatePost(id: string, body: any): Promise<PostDocument | null>;
    deletePost(id: string): Promise<PostDocument | null>;
    likePost(payload_id: string, post_id: string): Promise<PostDocument | null>;
    dislikePost(payload_id: string, post_id: string): Promise<PostDocument | null>;
    timelinePost(user_id: string, page: number): Promise<PostDocument[]>;
    getUserbyUsername(user_name: string): Promise<import("../models/local-auth.model").LocalAuthDocument | null>;
    getAllPost(user_id: string, page: number): Promise<PostDocument[]>;
    commentPost(user_name: string, user_pic: string, comment: string, date: Date, postId: string): Promise<PostDocument | null>;
}
