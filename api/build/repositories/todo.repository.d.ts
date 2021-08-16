import { TodoDocument } from '../models/todo.model';
export declare class TodoRepository {
    addTodo(userId: string, content: string, time: string, date: string): Promise<TodoDocument>;
    getTodo(userId: string, id: string): Promise<TodoDocument | null>;
    getTodos(userId: string, limit: number, skip: number): Promise<TodoDocument[]>;
    completedTodo(userId: string, id: string, completed: boolean): Promise<TodoDocument | null>;
    removeTodo(userId: string, id: string): Promise<TodoDocument | null>;
}
