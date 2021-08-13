"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
const EmailValidator = (email) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email);
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.validator.js.map