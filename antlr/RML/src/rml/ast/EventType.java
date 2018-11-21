package rml.ast;

import util.FunctionTerm;

import java.util.List;

public final class EventType extends FunctionTerm<Identifier, Atom> implements Exp {
    public EventType(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public EventType(Identifier id) {
        super(id);
    }
}
