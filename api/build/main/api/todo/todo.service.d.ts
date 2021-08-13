import { ResponseTodoDTO } from '../../../dtos/todo.dto';
import { JWTPayloadDTO } from '../../../dtos/jwt-payload.dto';
export declare class TodoService {
    private readonly todoRepo;
    getTodos(payload: JWTPayloadDTO, limit?: number, skip?: number): Promise<ResponseTodoDTO[]>;
    getTodo(payload: JWTPayloadDTO, id: string): Promise<ResponseTodoDTO | null>;
    addTodo(payload: JWTPayloadDTO, content: string, time: string, date: string): Promise<ResponseTodoDTO>;
    completedTodo(payload: JWTPayloadDTO, id: string, completed: boolean): Promise<ResponseTodoDTO | null>;
    removeTodo(payload: JWTPayloadDTO, id: string): Promise<ResponseTodoDTO | null>;
}
