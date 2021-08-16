"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
<<<<<<< HEAD
=======
const dotenv_1 = __importDefault(require("dotenv"));
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
const todo_routing_1 = require("./main/api/todo/todo.routing");
const local_auth_routing_1 = require("./main/auth/local/local-auth.routing");
const app_routing_1 = require("./app.routing");
const database_1 = require("./database");
const passport_1 = __importDefault(require("passport"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
class App {
    constructor() {
        this.app = express_1.default();
        this.todoroute = new todo_routing_1.TodoRoute();
        this.localauthroute = new local_auth_routing_1.LocalAuthRoute();
        this.setClient();
        this.setPassport();
        this.setEnvironment();
        this.setHelmet();
        this.setCors();
        this.registerRoute();
    }
    bootstrap() {
<<<<<<< HEAD
=======
        console.log("cool");
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
        const httpServer = http_1.createServer(this.app);
        this.setSocket(httpServer);
        httpServer.listen(process.env.PORT, () => {
            console.log("Server is listening on port %d", process.env.PORT);
        });
    }
    setClient() {
        this.app.use(express_1.default.static('./client/src'));
        this.app.use(express_1.default.static(__dirname + '/public'));
    }
    setPassport() {
        passport_1.default.initialize();
    }
    setHelmet() {
        this.app.use(helmet_1.default());
    }
    setSocket(httpServer) {
        const io = new socket_io_1.Server(httpServer, {
            cors: {
                origin: process.env.SOCKET_ORIGIN
            },
        });
        let users = [];
        const addUser = (userId, socketId) => {
            !users.some(user => user.userId === userId) &&
                users.push({ userId, socketId });
        };
        const removeUser = (socketId) => {
            users = users.filter(user => user.socketId !== socketId);
        };
        const getUser = (userId) => {
<<<<<<< HEAD
            console.log(users);
            return users.find(user => user.userId === userId);
        };
        io.on("connection", (socket) => {
            console.log(users);
=======
            return users.find(user => user.userId === userId);
        };
        io.on("connection", (socket) => {
            console.log("a user connected");
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
            socket.on("addUser", userId => {
                addUser(userId, socket.id);
                io.emit("getUsers", users);
            });
            socket.on("sendMessage", ({ senderId, receiverId, text }) => {
<<<<<<< HEAD
                console.log(senderId, text, receiverId);
=======
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
                const user = getUser(receiverId);
                io.to(user.socketId).emit("getMessage", {
                    senderId,
                    text,
                });
            });
            socket.on("disconnect", () => {
                console.log("a user disconnected");
                removeUser(socket.id);
                io.emit("getUsers", users);
            });
        });
    }
    setCors() {
        this.app.use(cors_1.default());
    }
    setEnvironment() {
<<<<<<< HEAD
        require('dotenv').config();
=======
        dotenv_1.default.config({ path: path_1.default.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`) });
>>>>>>> 905e60bc7194c5cdd226b6c6b996bbc95d9ef0f5
    }
    setException(handler) {
        this.app.use(handler);
    }
    launchDatabase() {
        const database = new database_1.Database();
        database.connect();
    }
    registerRoute() {
        ;
        this.route = new app_routing_1.AppRoute();
        this.app.use('/', this.route.router);
        this.app.get("*", (req, res) => {
            res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'");
            res.sendFile(path_1.default.resolve(__dirname, "../client", "build", "index.html"));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map