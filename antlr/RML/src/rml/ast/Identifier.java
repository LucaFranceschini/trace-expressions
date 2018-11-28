package rml.ast;

import rml.ast.visitor.ExpVisitor;
import util.AbstractIdentifier;

public final class Identifier extends AbstractIdentifier implements Exp {
    public Identifier(String name) {
        super(name);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
