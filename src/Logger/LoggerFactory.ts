import {Logger} from "./Logger";
import {LoggerJQuery} from "./LoggerJQuery";
import {LoggerConsole} from "./LoggerConsole";

export class LoggerFactory
{
    static create():Logger
    {

        if (typeof window != "undefined") {
            return new LoggerJQuery();
        } else {
            return new LoggerConsole();
        }
        
    }
}
