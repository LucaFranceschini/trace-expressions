package rml.ast;

import rml.ast.visitor.ExpVisitor;

public final class CatExp extends BinaryExp {
    public CatExp(Exp left, Exp right) {
        super(left, right);
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
