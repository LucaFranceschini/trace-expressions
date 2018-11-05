package ast;

public final class NumAtom implements Atom {
    private final int number;

    public NumAtom(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }
}
