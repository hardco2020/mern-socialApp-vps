import { HttpStatus } from '../../types/response.type';
export declare class ResponseObject<T> {
    readonly status: HttpStatus;
    readonly message: string;
    readonly data: any;
    constructor(options?: {
        status?: HttpStatus;
        message?: string;
        data?: any;
    });
}
