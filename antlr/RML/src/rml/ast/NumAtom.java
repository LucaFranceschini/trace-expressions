package rml.ast;

import rml.ast.visitor.AtomVisitor;

public final class NumAtom implements Atom {
    private final int number;

    public NumAtom(int number) {
        this.number = number;
    }

    public int number() {
        return number;
    }

    @Override
    public <T> T accept(AtomVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
