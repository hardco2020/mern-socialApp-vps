"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthSignupPipe = void 0;
const express_validator_1 = require("express-validator");
const pipe_base_1 = require("../../../bases/pipe.base");
const validators_1 = require("../../../validators");
class LocalAuthSignupPipe extends pipe_base_1.PipeBase {
    transform() {
        return [
            express_validator_1.body('password')
                .isLength({ min: 8, max: 20 }).withMessage('密碼長度需 8 ~ 20 字元')
                .matches(/^[A-Za-z0-9]+$/).withMessage('密碼只能含有大小寫英文字母與數字')
                .notEmpty().withMessage('密碼不得為空'),
            express_validator_1.body('email')
                .custom(value => validators_1.EmailValidator(value)).withMessage('請確認是否符合 email 格式')
                .notEmpty().withMessage('email 不得為空'),
            this.validationHandler
        ];
    }
}
exports.LocalAuthSignupPipe = LocalAuthSignupPipe;
//# sourceMappingURL=local-auth.pipe.js.map