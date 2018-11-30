package rml.ast;

public final class NumAtom implements Atom {
    private final int number;

    public NumAtom(int number) {
        this.number = number;
    }

    public int number() {
        return number;
    }

    @Override
    public <T> T accept(ExpVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
