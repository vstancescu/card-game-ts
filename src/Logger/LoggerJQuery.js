define(["require", "exports"], function (require, exports) {
    "use strict";
    var LoggerJQuery = (function () {
        function LoggerJQuery() {
        }
        LoggerJQuery.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            jQuery('body').append('<p>' + args.map(function (arg) { return String(arg); }).join(' ') + '</p>');
        };
        return LoggerJQuery;
    }());
    exports.LoggerJQuery = LoggerJQuery;
});
