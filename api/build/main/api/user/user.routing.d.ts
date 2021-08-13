import { RouteBase } from '../../../bases/route.base';
import { UserController } from './user.controller';
export declare class UserRoute extends RouteBase {
    protected controller: UserController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
