const core = require('@actions/core');
const github = require('@actions/github');

export class Parameters {

	getInput(name: string): string {
		return core.getInput(name);
	}

}