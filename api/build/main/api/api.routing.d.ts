import { RouteBase } from '../../bases/route.base';
export declare class ApiRoute extends RouteBase {
    private noticeRoute;
    private todoRoute;
    private userRoute;
    private postRoute;
    private conversationRoute;
    private messageRoute;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
