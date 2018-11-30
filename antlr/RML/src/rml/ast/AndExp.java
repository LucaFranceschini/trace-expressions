package rml.ast;

public final class AndExp extends BinaryExp {
    public AndExp(Exp left, Exp right) {
        super(left, right);
    }
    
    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
