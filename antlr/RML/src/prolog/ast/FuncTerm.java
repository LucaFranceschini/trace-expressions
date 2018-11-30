package prolog.ast;

import util.AbstractFunctionTerm;

import java.util.List;

public final class FuncTerm extends AbstractFunctionTerm<Symbol, Term> implements Term {
    public FuncTerm(Symbol symbol, List<? extends Term> args) {
        super(symbol, args);
    }

    public FuncTerm(Symbol symbol, Term... args) { this(symbol, List.of(args)); }

    public FuncTerm(Symbol symbol) {
        super(symbol);
    }
}
