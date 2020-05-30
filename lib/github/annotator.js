"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotator = void 0;
const parser_1 = require("./../parser/parser");
class Annotator {
    createAnnotation(annotation) {
        let type;
        switch (annotation.type) {
            case parser_1.AnnotationType.Warning:
                type = "warning";
                break;
            case parser_1.AnnotationType.RuntimeFailure:
            case parser_1.AnnotationType.Error:
                type = "error";
                break;
        }
        console.log(`::${type} file=${annotation.location.file},line=${annotation.location.lineNumber},col=${annotation.location.startCharacterIndex}::${annotation.message}`);
    }
}
exports.Annotator = Annotator;
