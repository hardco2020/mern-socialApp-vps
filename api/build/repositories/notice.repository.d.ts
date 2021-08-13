import { NoticeDocument } from "../models/notice.model";
export declare class NoticeRepository {
    sendNotice(senderId: string, object: string, senderPic: string, senderUsername: string, receiverId: string): Promise<NoticeDocument>;
    getNotice(id: string, page: number): Promise<NoticeDocument[]>;
    updateNotice(noticeId: string, readId: string): Promise<NoticeDocument | null>;
    sendNoticePost(senderId: string, object: string, senderPic: string, senderUsername: string, receiverId: string, postId: string): Promise<NoticeDocument>;
    deleteNotice(noticeId: string, readId: string): Promise<NoticeDocument | null>;
}
