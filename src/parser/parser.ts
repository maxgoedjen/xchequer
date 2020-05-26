export enum AnnotationType {
	Error,
	Warning,
	RuntimeFailure,
}

export interface AnnotationLocation {
	file: string;
	lineNumber: number;
	startCharacterIndex: number;
	endCharacterIndex: number;
}

export interface Annotation {
	type: AnnotationType;
	message: string;
	location: AnnotationLocation;
}

export interface Parser {
	parse(type: AnnotationType, log: string): Annotation[]
}