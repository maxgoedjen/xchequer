"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XcodeBuildParser = void 0;
class XcodeBuildParser {
    parse(type, log) {
        let annotations = [];
        const regex = /(.*):(\d*):(\d*): error: (.*)$/mg;
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
