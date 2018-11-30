package rml.ast;

// enum for singleton pattern
public enum EpsExp implements Exp {
    INSTANCE;

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}