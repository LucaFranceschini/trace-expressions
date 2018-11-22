package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class Atom extends AbstractFunctionTerm<Symbol, FuncTerm> {
    public Atom(Symbol id, List<FuncTerm> args) {
        super(id, args);
    }

    public Atom(Symbol id) {
        super(id);
    }
}
