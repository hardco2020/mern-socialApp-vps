import { ControllerBase } from '../../../bases/controller.base';
import { ResponseObject } from 'common/response/response.object';
import { Request } from 'express';
import { NoticeDocument } from 'models/notice.model';
export declare class NoticeController extends ControllerBase {
    private readonly NoticeSvc;
    sendNotice(req: Request): Promise<ResponseObject<NoticeDocument>>;
    getNotice(req: Request): Promise<ResponseObject<NoticeDocument[]>>;
    updateNotice(req: Request): Promise<ResponseObject<NoticeDocument>>;
    sendNoticePost(req: Request): Promise<ResponseObject<NoticeDocument>>;
    deleteNotice(req: Request): Promise<ResponseObject<NoticeDocument>>;
}
