/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface LocalAuthDocument extends CoreDocument {
    username: string;
    password: {
        salt: string;
        hash: string;
    };
    email: string;
    profilePicture: string;
    coverPicture: string;
    followers: any[];
    follwings: any[];
    isAdmin: Boolean;
    desc: string;
    city: string;
    from: string;
    relationship: number;
    friends: any[];
}
export declare const LocalAuthModel: import("mongoose").Model<LocalAuthDocument, {}, {}>;
