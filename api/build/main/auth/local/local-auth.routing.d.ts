import { RouteBase } from '../../../bases/route.base';
import { LocalAuthController } from './local-auth.controller';
export declare class LocalAuthRoute extends RouteBase {
    protected controller: LocalAuthController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
