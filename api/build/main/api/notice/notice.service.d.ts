export declare class NoticeService {
    private readonly ntRepo;
    sendNotice(senderId: string, object: string, senderPic: string, senderUsername: string, receiverId: string): Promise<import("../../../models/notice.model").NoticeDocument>;
    getNotice(id: string, page: number): Promise<import("../../../models/notice.model").NoticeDocument[]>;
    updateNotice(noticeId: string, readId: string): Promise<import("../../../models/notice.model").NoticeDocument | null>;
    sendNoticePost(senderId: string, object: string, senderPic: string, senderUsername: string, receiverId: string, postId: string): Promise<import("../../../models/notice.model").NoticeDocument>;
    deleteNotice(noticeId: string, readId: string): Promise<import("../../../models/notice.model").NoticeDocument | null>;
}
