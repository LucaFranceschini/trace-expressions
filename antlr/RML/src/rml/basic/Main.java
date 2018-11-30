package rml.basic;

import java.io.IOException;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStream;

public class Main {

	public static void main(String[] args) {
		try {
			RMLLexer lexer = new RMLLexer(CharStreams.fromStream(System.in));
			TokenStream tokenizer = new CommonTokenStream(lexer);
			RMLParser parser = new RMLParser(tokenizer);
			parser.main().accept(new Compile());
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}

	}

}
