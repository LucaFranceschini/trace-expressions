package prolog.ast;

import util.AbstractIdentifier;

public final class Variable extends AbstractIdentifier implements Term {
    public Variable(String name) {
        super(name);
        char first = name.charAt(0);
        if (!Character.isUpperCase(first) && first != '_')
            throw new IllegalArgumentException("invalid prolog variable identifier");
    }
}
