package rml.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class FuncAtom extends AbstractFunctionTerm<Identifier, Atom> implements Atom {
    public FuncAtom(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public FuncAtom(Identifier id) {
        super(id);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
