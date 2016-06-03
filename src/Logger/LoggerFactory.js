define(["require", "exports", "./LoggerJQuery", "./LoggerConsole"], function (require, exports, LoggerJQuery_1, LoggerConsole_1) {
    "use strict";
    var LoggerFactory = (function () {
        function LoggerFactory() {
        }
        LoggerFactory.create = function () {
            if (typeof window != "undefined") {
                return new LoggerJQuery_1.LoggerJQuery();
            }
            else {
                return new LoggerConsole_1.LoggerConsole();
            }
        };
        return LoggerFactory;
    }());
    exports.LoggerFactory = LoggerFactory;
});
