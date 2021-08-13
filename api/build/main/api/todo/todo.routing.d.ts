import { RouteBase } from '../../../bases/route.base';
import { TodoController } from './todo.controller';
export declare class TodoRoute extends RouteBase {
    protected controller: TodoController;
    constructor();
    protected initial(): void;
    protected registerRoute(): void;
}
