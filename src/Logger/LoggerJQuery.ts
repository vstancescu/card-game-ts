import {Logger} from "./Logger";
export class LoggerJQuery implements Logger
{

    log(...args:any[]):void {
        jQuery('body').append('<p>ItWorks</p>');
    }
}