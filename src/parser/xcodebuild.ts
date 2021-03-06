import { Parser, Annotation, AnnotationType, AnnotationLocation } from "./parser";

export class XcodeBuildParser implements Parser {
		
	parse(type: AnnotationType, log: string): Annotation[] {
		let annotations: Annotation[] = []
		// Ridic that sets only use ===
		let encountered: Set<string> = new Set();
		let regex: RegExp;
		switch (type) {
			case AnnotationType.RuntimeFailure:
				// Unimplemented
				return [];
			case AnnotationType.Warning:
				regex = /(.*):(\d*):(\d*): warning: (.*)$/mg;
				break;
			case AnnotationType.Error:
				regex = /(.*):(\d*):(\d*): error: (.*)$/mg;
				break;
		}

		let match: RegExpExecArray | null
		while ((match = regex.exec(log)) != null) {
			const raw = match[0];
			if (encountered.has(raw)) {
				continue;
			}
			encountered.add(raw);
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
