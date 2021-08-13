import { ResponseDTOBase } from '../bases/dto.base';
import { TodoDocument } from '../models/todo.model';
export declare class ResponseTodoDTO extends ResponseDTOBase {
    readonly _id: string;
    readonly content: string;
    readonly completed: boolean;
    readonly date: string;
    readonly time: string;
    constructor(doc: TodoDocument);
}
