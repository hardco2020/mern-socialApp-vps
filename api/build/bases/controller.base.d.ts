import { HttpStatus } from '../types/response.type';
import { ResponseObject } from '../common/response/response.object';
export declare abstract class ControllerBase {
    formatResponse(data: any, status?: HttpStatus): ResponseObject<any>;
}
