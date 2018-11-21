package ast;

import java.util.List;

public final class EventType extends FuncTerm implements Exp {
    public EventType(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public EventType(Identifier id) {
        super(id);
    }
}
