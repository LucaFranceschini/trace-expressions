package prolog.ast;

import util.AbstractIdentifier;

// predicate or function symbol
public final class Symbol extends AbstractIdentifier {
    public Symbol(String name) {
        super(name);

        if (Character.isLowerCase(name.charAt(0)))
            throw new IllegalArgumentException("predicate and function symbols should start with lowercase letters");
    }
}
