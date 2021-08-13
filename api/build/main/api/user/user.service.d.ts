import { JWTPayloadDTO } from '../../../dtos/jwt-payload.dto';
export declare class UserService {
    private readonly localAuthRepo;
    updateUser(payload: JWTPayloadDTO, body: any): Promise<import("../../../models/local-auth.model").LocalAuthDocument | null>;
    getUserbyId(id: string): Promise<any>;
    getUserbyUsername(user_name: string): Promise<any>;
    createPending(senderId: string, receiverId: string): Promise<import("../../../models/pending.model").PendingDocument>;
    updatePending(senderId: string, receiverId: string): Promise<import("../../../models/pending.model").PendingDocument | null>;
    getPending(senderId: string, receiverId: string): Promise<import("../../../models/pending.model").PendingDocument | null>;
    deletePending(senderId: string, receiverId: string): Promise<import("../../../models/pending.model").PendingDocument | null>;
    friendUser(id: string, friendId: string): Promise<string>;
    unfriendUser(id: string, friendId: string): Promise<string>;
    getFriends(user_id: string): Promise<{
        _id: any;
        username: any;
        profilePicture: any;
    }[]>;
    searchUsers(key: string): Promise<import("../../../models/local-auth.model").LocalAuthDocument[]>;
    recommendUsers(user_id: string): Promise<import("../../../models/local-auth.model").LocalAuthDocument[]>;
}
