package ast;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

// generic ID(atom1, ..., atomN) term
public abstract class FuncTerm {
    private final Identifier id;
    private final List<Atom> args;

    public FuncTerm(Identifier id, List<Atom> args) {
        this.id = Objects.requireNonNull(id);
        this.args = List.copyOf(args);
    }

    public FuncTerm(Identifier id) {
        this(id, Collections.emptyList());
    }

    public Identifier getIdentifier() {
        return id;
    }

    public List<Atom> getArguments() {
        return args;
    }
}
