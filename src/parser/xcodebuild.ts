import { Parser, Annotation, AnnotationType, AnnotationLocation } from "./parser";

export class XcodeBuildParser implements Parser {
		
	parse(type: AnnotationType, log: string): Annotation[] {
		let annotations: Annotation[] = []
		const regex = /(.*):(\d*):(\d*): error: (.*)$/mg
		let match: RegExpExecArray | null
		while ((match = regex.exec(log)) != null) {
			const location = {
				file: match[1],
				lineNumber: +match[2],
				startCharacterIndex: +match[3],
			};
			const annotation = {
				type: type,
				message: match[4],
				location: location
			};
			annotations.push(annotation)
		}
		return annotations
	}
	
}
