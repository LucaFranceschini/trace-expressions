package prolog.ast;

public final class NumTerm implements Term {
    private final int value;

    public NumTerm(int value) {
        this.value = value;
    }
}
