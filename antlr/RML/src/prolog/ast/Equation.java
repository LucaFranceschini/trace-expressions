package prolog.ast;

import java.util.Objects;

public final class Equation implements AtomicFormula {
    private final Symbol identifier;
    private final Term term;

    public Equation(Symbol identifier, Term term) {
        this.identifier = Objects.requireNonNull(identifier);
        this.term = Objects.requireNonNull(term);
    }

    public Symbol identifier() { return identifier; }
    public Term term() { return term; }
}
