package ast;

import java.util.List;

public final class Spec {
    private final List<Declaration> declarations;

    public Spec(List<Declaration> declarations) {
        if (declarations.isEmpty())
            throw new IllegalArgumentException("one or more declarations expected");
        
        this.declarations = List.copyOf(declarations);
    }

    public List<Declaration> declarations() {
        return declarations;
    }
}
