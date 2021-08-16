import { ErrorRequestHandler } from 'express';
export declare class App {
    private app;
    constructor();
    bootstrap(): void;
    private setClient;
    private setPassport;
    private setHelmet;
    private setSocket;
    private setCors;
    private setEnvironment;
    setException(handler: ErrorRequestHandler): void;
    launchDatabase(): void;
    private todoroute;
    private localauthroute;
    private route;
    private registerRoute;
}
