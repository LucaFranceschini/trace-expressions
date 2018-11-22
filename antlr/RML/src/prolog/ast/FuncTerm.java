package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class FuncTerm extends AbstractFunctionTerm<Identifier, FuncTerm> implements Term {
    public FuncTerm(Identifier id, List<FuncTerm> args) {
        super(id, args);
    }

    public FuncTerm(Identifier id) {
        super(id);
    }
}
