import { Annotation, AnnotationType, AnnotationLocation } from "./parser/parser";
import { XcodeBuildParser } from "./parser/xcodebuild";
import { Annotator } from "./github/annotator";
import { readFileSync } from 'fs';


const parser = new XcodeBuildParser();
const annotator = new Annotator();
const text = readFileSync('./build.log', 'utf-8');
const errors = parser.parse(AnnotationType.Error, text);
for (let entry of errors) {
  annotator.createAnnotation(entry);
}
const warnings = parser.parse(AnnotationType.Warning, text);
for (let entry of warnings) {
  annotator.createAnnotation(entry);
}
