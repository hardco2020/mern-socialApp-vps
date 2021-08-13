/// <reference types="mongoose" />
import { CoreDocument } from '../types/model.type';
export interface TodoDocument extends CoreDocument {
    content: string;
    completed: boolean;
    owner: string;
    time: string;
    date: string;
}
export declare const TodoModel: import("mongoose").Model<TodoDocument, {}, {}>;
