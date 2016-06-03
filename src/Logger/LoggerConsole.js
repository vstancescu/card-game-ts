define(["require", "exports"], function (require, exports) {
    "use strict";
    var LoggerConsole = (function () {
        function LoggerConsole() {
        }
        LoggerConsole.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log(args);
        };
        return LoggerConsole;
    }());
    exports.LoggerConsole = LoggerConsole;
});
