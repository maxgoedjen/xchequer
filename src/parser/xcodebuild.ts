import { Parser, Annotation, AnnotationType, AnnotationLocation } from "./parser";

class XcodeBuildParser implements Parser {
	
	parse(type: AnnotationType, log: string): Annotation[] {
		const location = {
			file: "src/test.txt",
			lineNumber: 5,
			startCharacterIndex: 0,
			endCharacterIndex: 100
		};
		const annotation = {
			type: type,
			message: "Hello World",
			location: location
		};
		return [annotation]
	}
	
}

let p = new XcodeBuildParser();
let x = p.parse(AnnotationType.Error, "Hello World");
console.log("hello");