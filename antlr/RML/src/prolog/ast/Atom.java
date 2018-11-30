package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class Atom extends AbstractFunctionTerm<Symbol, Term> {
    public Atom(Symbol id, List<Term> args) {
        super(id, args);
    }

    public Atom(Symbol id) {
        super(id);
    }
}
