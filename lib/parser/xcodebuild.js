"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XcodeBuildParser = void 0;
const parser_1 = require("./parser");
class XcodeBuildParser {
    parse(type, log) {
        let annotations = [];
        let regex;
        switch (type) {
            case parser_1.AnnotationType.RuntimeFailure:
                // Unimplemented
                return [];
            case parser_1.AnnotationType.Warning:
                regex = /(.*):(\d*):(\d*): warning: (.*)$/mg;
                break;
            case parser_1.AnnotationType.Error:
                regex = /(.*):(\d*):(\d*): error: (.*)$/mg;
                break;
        }
        let match;
        while ((match = regex.exec(log)) != null) {
            const location = {
                file: match[1],
                lineNumber: +match[2],
                startCharacterIndex: +match[3],
            };
            const annotation = {
                type: type,
                message: match[4],
                location: location
            };
            annotations.push(annotation);
        }
        return annotations;
    }
}
exports.XcodeBuildParser = XcodeBuildParser;
