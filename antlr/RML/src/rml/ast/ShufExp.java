package rml.ast;

import rml.ast.visitor.ExpVisitor;

public final class ShufExp extends BinaryExp {
    public ShufExp(Exp left, Exp right) {
        super(left, right);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}