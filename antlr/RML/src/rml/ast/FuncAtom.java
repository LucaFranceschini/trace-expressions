package rml.ast;

import util.FunctionTerm;

import java.util.List;

public final class FuncAtom extends FunctionTerm<Identifier, Atom> implements Atom {
    public FuncAtom(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public FuncAtom(Identifier id) {
        super(id);
    }
}
