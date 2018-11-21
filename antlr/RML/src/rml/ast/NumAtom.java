package rml.ast;

public final class NumAtom implements Atom {
    private final int number;

    public NumAtom(int number) {
        this.number = number;
    }

    public int number() {
        return number;
    }
}
