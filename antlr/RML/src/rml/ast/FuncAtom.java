package rml.ast;

import rml.ast.visitor.AtomVisitor;
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
    public <T> T accept(AtomVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
