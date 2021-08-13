import { RouteBase } from '../../../bases/route.base';
import { MessageController } from './message.controller';
export declare class MessageRoute extends RouteBase {
    protected controller: MessageController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
