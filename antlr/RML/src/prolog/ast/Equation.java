package prolog.ast;

import java.util.Objects;

public final class Equation implements AtomicFormula {
    private final Identifier identifier;
    private final Term term;

    public Equation(Identifier identifier, Term term) {
        this.identifier = Objects.requireNonNull(identifier);
        this.term = Objects.requireNonNull(term);
    }

    public Identifier identifier() { return identifier; }
    public Term term() { return term; }
}
