package rml.ast;

import rml.ast.visitor.ExpVisitor;

// enum for singleton pattern
public enum EpsExp implements Exp {
    INSTANCE;

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}