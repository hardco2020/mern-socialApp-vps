"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const route_base_1 = require("../../bases/route.base");
const local_auth_routing_1 = require("./local/local-auth.routing");
class AuthRoute extends route_base_1.RouteBase {
    constructor() {
        super();
        this.authRoute = new local_auth_routing_1.LocalAuthRoute();
    }
    initial() {
        this.authRoute = new local_auth_routing_1.LocalAuthRoute();
        super.initial();
    }
    registerRoute() {
        this.router.use('/local', this.authRoute.router);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.routing.js.map