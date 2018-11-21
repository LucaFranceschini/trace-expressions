package ast;

import java.util.List;

public final class FuncAtom extends FuncTerm implements Atom {
    public FuncAtom(Identifier id, List<Atom> args) {
        super(id, args);
    }

    public FuncAtom(Identifier id) {
        super(id);
    }
}
