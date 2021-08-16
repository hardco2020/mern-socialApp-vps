import { RouteBase } from './bases/route.base';
import { ApiRoute } from './main/api/api.routing';
import { AuthRoute } from './main/auth/auth.routing';
export declare class AppRoute extends RouteBase {
    apiRoute: ApiRoute;
    authRoute: AuthRoute;
    constructor();
    protected initial(): void;
    registerRoute(): void;
}
