package rml.ast;

import rml.ast.visitor.ExpVisitor;

public final class OrExp extends BinaryExp {
    public OrExp(Exp left, Exp right) {
        super(left, right);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
