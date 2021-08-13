"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthService = void 0;
const local_auth_repository_1 = require("../../../repositories/local-auth.repository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
class LocalAuthService {
    constructor() {
        this.localAuthRepo = new local_auth_repository_1.LocalAuthRepository();
    }
    generateJWT(user) {
        const expiry = new Date();
        console.log(process.env.JWT_SIGN);
        expiry.setDate(expiry.getDate() + 30);
        return jsonwebtoken_1.default.sign({
            _id: user._id,
            username: user.username,
            exp: expiry.getTime() / 1000
        }, process.env.JWT_SIGN);
    }
    get Strategy() {
        return new passport_local_1.Strategy({ session: false }, this.verifyUserFlow());
    }
    verifyUserFlow() {
        return (username, password, done) => {
            let data;
            const emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/;
            if (emailRegxp.test(username) === true) {
                data = { "email": username };
            }
            else {
                data = { "username": username };
            }
            this.localAuthRepo.getUser({ data })
                .then(user => {
                const error = new Error();
                if (!user) {
                    error.message = '查無此用戶';
                    error.status = 404;
                    return done(error);
                }
                if (!this.verifyPassword(user, password)) {
                    error.message = '您輸入的密碼有誤';
                    error.status = 403;
                    return done(error);
                }
                return done(null, user);
            })
                .catch((err) => done(err));
        };
    }
    verifyPassword(user, password) {
        const pair = this.localAuthRepo.hashPassword(password, user.password.salt);
        return pair.hash === user.password.hash;
    }
    authenticate(...args) {
        return new Promise((resolve, reject) => {
            passport_1.default.authenticate('local', (err, user) => {
                if (err) {
                    return reject(err);
                }
                const token = this.generateJWT(user);
                resolve(token);
            })(...args);
        });
    }
    async addUser(username, password, email) {
        const isUsedEmail = await this.localAuthRepo.getUserbyEmail(email);
        const isUsedName = await this.localAuthRepo.getUserbyUsername(username);
        if (isUsedEmail || isUsedName) {
            const error = new Error('使用者名稱或電子信箱已被使用');
            error.status = 409;
            console.log(error);
            throw error;
        }
        const user = await this.localAuthRepo.addUser(username, password, email);
        return user;
    }
}
exports.LocalAuthService = LocalAuthService;
//# sourceMappingURL=local-auth.service.js.map