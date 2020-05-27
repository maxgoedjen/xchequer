"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser/parser");
const xcodebuild_1 = require("./parser/xcodebuild");
const annotator_1 = require("./github/annotator");
const fs_1 = require("fs");
const parser = new xcodebuild_1.XcodeBuildParser();
const annotator = new annotator_1.Annotator();
const text = fs_1.readFileSync('./build.log', 'utf-8');
const errors = parser.parse(parser_1.AnnotationType.Error, text);
for (let entry of errors) {
    annotator.createAnnotation(entry);
}
const warnings = parser.parse(parser_1.AnnotationType.Warning, text);
for (let entry of warnings) {
    annotator.createAnnotation(entry);
}
