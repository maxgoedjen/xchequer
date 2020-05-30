import { Annotation, AnnotationType, AnnotationLocation } from "./../parser/parser";

export class Annotator {

	createAnnotation(annotation: Annotation) {
		let type: string;
		switch (annotation.type) {
			case AnnotationType.Warning:
				type = "warning";
				break;
			case AnnotationType.RuntimeFailure:
			case AnnotationType.Error:
				type = "error";
				break;
		}
		console.log(`::${type} file=${annotation.location.file},line=${annotation.location.lineNumber},col=${annotation.location.startCharacterIndex}::${annotation.message}`);
	}

}