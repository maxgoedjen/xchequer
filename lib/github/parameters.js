"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
const core = require('@actions/core');
const github = require('@actions/github');
class Parameters {
    getInput(name) {
        return core.getInput(name);
    }
}
exports.Parameters = Parameters;
