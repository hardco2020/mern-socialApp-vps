import { HttpStatus } from '../../types/response.type';
export declare class ResponseError extends Error {
    status: HttpStatus;
    constructor(message?: any, status?: HttpStatus);
}
