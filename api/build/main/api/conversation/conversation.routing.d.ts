import { RouteBase } from '../../../bases/route.base';
import { ConversationController } from './conversation.controller';
export declare class ConversationRoute extends RouteBase {
    protected controller: ConversationController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
