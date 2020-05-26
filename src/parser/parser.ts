export enum AnnotationType {
	Error,
	Warning,
	RuntimeFailure,
}

export class AnnotationLocation {
	file: string;
	lineNumber: number;
	startCharacterIndex: number;
	endCharacterIndex: number;
}

export class Annotation {
	type: AnnotationType;
	location: AnnotationLocation;
}

export interface Parser {
	parse(type: AnnotationType, log: string): Annotation[]
}