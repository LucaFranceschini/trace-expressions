package prolog.ast;

import util.FunctionTerm;

import java.util.List;

public final class Atom extends FunctionTerm<Identifier, Term> {
    public Atom(Identifier id, List<Term> args) {
        super(id, args);
    }

    public Atom(Identifier id) {
        super(id);
    }
}
