/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface PostDocument extends CoreDocument {
    userId: string;
    desc: string;
    img: string;
    likes: any[];
    comment: any[];
}
export declare const PostModel: import("mongoose").Model<PostDocument, {}, {}>;
