import { RouteBase } from '../../../bases/route.base';
import { PostController } from './post.controller';
export declare class PostRoute extends RouteBase {
    protected controller: PostController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
