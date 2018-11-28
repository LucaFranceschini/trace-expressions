package rml.ast;

import rml.ast.visitor.ExpVisitor;
import util.AbstractFunctionTerm;

import java.util.List;

public final class EventType extends AbstractFunctionTerm<Identifier, Atom> implements Exp {
    public EventType(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public EventType(Identifier id) {
        super(id);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
