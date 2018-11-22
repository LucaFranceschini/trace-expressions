package rml.ast;

import util.AbstractIdentifier;

public final class Identifier extends AbstractIdentifier implements Exp {
    public Identifier(String name) {
        super(name);
    }
}
