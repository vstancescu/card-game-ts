import {Logger} from "./Logger";
export class LoggerConsole implements Logger
{

    log(...args:any[]):void {
        console.log(args);
    }
}