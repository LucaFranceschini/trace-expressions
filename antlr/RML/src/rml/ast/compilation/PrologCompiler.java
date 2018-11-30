package rml.ast.compilation;

import prolog.ast.*;
import prolog.ast.Atom;
import rml.ast.*;

import java.util.List;
import java.util.stream.Collectors;

public final class PrologCompiler {
    private PrologCompiler() { assert false; }

    public static Program compile(Spec spec, String specId) {
        var head = new prolog.ast.Atom(new Symbol("trace_expression"),
                List.of(new FuncTerm(new Symbol(specId)), new Variable(spec.mainId().name())));
        var body = spec.declarations().stream().map(PrologCompiler::compile).collect(Collectors.toList());
        var rule = new Rule(head, body);
        return new Program(List.of(rule));
    }

    private static Atom compile(Declaration declaration) {
        return new Atom(new Symbol("="), List.of(
                new Variable(declaration.identifier().name()),
                declaration.body().accept(ExpCompiler.INSTANCE)));
    }
}
