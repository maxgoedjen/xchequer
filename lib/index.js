"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser/parser");
const xcodebuild_1 = require("./parser/xcodebuild");
const annotator_1 = require("./github/annotator");
const parameters_1 = require("./github/parameters");
const fs_1 = require("fs");
const parser = new xcodebuild_1.XcodeBuildParser();
const annotator = new annotator_1.Annotator();
const params = new parameters_1.Parameters();
const text = fs_1.readFileSync(params.getInput('log'), 'utf-8');
const errors = parser.parse(parser_1.AnnotationType.Error, text);
for (let entry of errors) {
    annotator.createAnnotation(entry);
}
const warnings = parser.parse(parser_1.AnnotationType.Warning, text);
for (let entry of warnings) {
    annotator.createAnnotation(entry);
}
const runtime = parser.parse(parser_1.AnnotationType.RuntimeFailure, text);
for (let entry of runtime) {
    annotator.createAnnotation(entry);
}
