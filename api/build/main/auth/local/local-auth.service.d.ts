import { LocalAuthDocument } from "../../../models/local-auth.model";
import { Strategy } from 'passport-local';
export declare class LocalAuthService {
    private readonly localAuthRepo;
    generateJWT(user: LocalAuthDocument): string;
    get Strategy(): Strategy;
    private verifyUserFlow;
    private verifyPassword;
    authenticate(...args: any[]): Promise<string>;
    addUser(username: string, password: string, email: string): Promise<LocalAuthDocument>;
}
