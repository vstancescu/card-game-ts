import {Logger} from "./Logger";
export class LoggerJQuery implements Logger
{

    log(...args:any[]):void {
        jQuery('body').append('<p>' + args.map(function(arg) { return String(arg); }).join(' ') + '</p>');
    }
}