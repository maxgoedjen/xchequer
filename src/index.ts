// import { Annotation, AnnotationType, AnnotationLocation } from "./parser/parser";
// import { XcodeBuildParser } from "./parser/xcodebuild";

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const log = core.getInput('log');
  console.log(`Hello ${log}!`);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
