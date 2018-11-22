package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class Atom extends AbstractFunctionTerm<Identifier, FuncTerm> {
    public Atom(Identifier id, List<FuncTerm> args) {
        super(id, args);
    }

    public Atom(Identifier id) {
        super(id);
    }
}
