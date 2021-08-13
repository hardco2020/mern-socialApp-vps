"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoute = void 0;
const route_base_1 = require("./bases/route.base");
const api_routing_1 = require("./main/api/api.routing");
const auth_routing_1 = require("./main/auth/auth.routing");
class AppRoute extends route_base_1.RouteBase {
    constructor() {
        super();
        this.apiRoute = new api_routing_1.ApiRoute();
        this.authRoute = new auth_routing_1.AuthRoute();
    }
    initial() {
        this.apiRoute = new api_routing_1.ApiRoute();
        this.authRoute = new auth_routing_1.AuthRoute();
        super.initial();
    }
    registerRoute() {
        this.router.use('/api', this.apiRoute.router);
        this.router.use('/auth', this.authRoute.router);
    }
}
exports.AppRoute = AppRoute;
;
//# sourceMappingURL=app.routing.js.map