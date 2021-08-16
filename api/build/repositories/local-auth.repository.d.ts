import { LocalAuthDocument } from '../models/local-auth.model';
import { PendingDocument } from '../models/pending.model';
export declare class LocalAuthRepository {
    hashPassword(password: string, salt?: string): {
        salt: string;
        hash: string;
    };
    addUser(username: string, password: string, email: string): Promise<LocalAuthDocument>;
    getUser(options: any): Promise<LocalAuthDocument | null>;
    updateUser(userId: string, body: any): Promise<LocalAuthDocument | null>;
    getUserbyId(id: string): Promise<any>;
    getUserbyUsername(user_name: string): Promise<any>;
    getUserbyEmail(email: string): Promise<any>;
    unfriendUser(id: string, friendId: string): Promise<LocalAuthDocument | null>;
    friendUser(id: string, friendId: string): Promise<LocalAuthDocument | null>;
    createPending(senderId: string, receiverId: string): Promise<PendingDocument>;
    updatePending(senderId: string, receiverId: string): Promise<PendingDocument | null>;
    getPending(senderId: string, receiverId: string): Promise<PendingDocument | null>;
    deletePending(senderId: string, receiverId: string): Promise<PendingDocument | null>;
    searchUsers(key: string): Promise<LocalAuthDocument[]>;
    recommendUsers(id: string): Promise<LocalAuthDocument[]>;
}
