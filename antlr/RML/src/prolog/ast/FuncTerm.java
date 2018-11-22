package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class FuncTerm extends AbstractFunctionTerm<Symbol, FuncTerm> implements Term {
    public FuncTerm(Symbol id, List<FuncTerm> args) {
        super(id, args);
    }

    public FuncTerm(Symbol id) {
        super(id);
    }
}
