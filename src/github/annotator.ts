import { Annotation, AnnotationType, AnnotationLocation } from "./../parser/parser";

const core = require('@actions/core');
const github = require('@actions/github');
const gotbase = require('got');

// TODO: REMOVE
const _URL = 'https://api.github.com/repos/maxgoedjen/xchequer/pulls';
// const _URL = 'https://api.github.com/repos/maxgoedjen/xchequer/check-runs';
const _HEADSHA = 'c4aa962e377c01897768e64f5ba516ff1e0de41f';

const got = gotbase.extend({
	hooks: {
		beforeRequest: [
			options => {
				// TODO: FIX
				options.url.username = 'maxgoedjen';
				options.url.password = core.getInput('github_actions_token');
				options.headers.accept = 'application/vnd.github.antiope-preview+json';
				options.json = true;
			}
		]
	}
});


export class Annotator {

async createCheck() {
  try {
	const response = await got.get(_URL);
	console.log(response.body); 
	const payload = JSON.stringify(github.context.payload, undefined, 2)
	console.log(`The event payload: ${payload}`);
  } catch (error) {
	core.setFailed(error.message);
  }
}

}