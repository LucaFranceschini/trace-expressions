package prolog.ast;

import util.FunctionTerm;

import java.util.List;

public final class Term extends FunctionTerm<Identifier, Term> {
    public Term(Identifier id, List<Term> args) {
        super(id, args);
    }

    public Term(Identifier id) {
        super(id);
    }
}
