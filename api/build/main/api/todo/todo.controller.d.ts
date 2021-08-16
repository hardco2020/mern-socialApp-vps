import { Request } from 'express';
import { ControllerBase } from '../../../bases/controller.base';
import { ResponseObject } from '../../../common/response/response.object';
import { ResponseTodoDTO } from 'dtos/todo.dto';
export declare class TodoController extends ControllerBase {
    private readonly todoSvc;
    getTodos(req: Request): Promise<ResponseObject<ResponseTodoDTO[]>>;
    getTodo(req: Request): Promise<ResponseObject<ResponseTodoDTO>>;
    addTodo(req: Request): Promise<ResponseObject<ResponseTodoDTO>>;
    completedTodo(req: Request): Promise<ResponseObject<ResponseTodoDTO>>;
    removeTodo(req: Request): Promise<ResponseObject<null>>;
}
