"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const database_option_1 = require("./database.option");
class Database {
    connect() {
        mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.5iof1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, database_option_1.DATABASE_OPTIONS)
            .then(() => console.log(`Database ${process.env.DB_NAME} is connected.`))
            .catch(err => console.error(err));
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map