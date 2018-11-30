package rml.ast;

import java.util.List;

public final class Spec {
    private final List<Declaration> declarations;
    private final Identifier mainId;

    public Spec(List<Declaration> declarations, Identifier mainId) {
        if (declarations.isEmpty())
            throw new IllegalArgumentException("One or more declarations expected");

        if (declarations.stream().map(Declaration::identifier).noneMatch(id -> id.equals(mainId)))
            throw new IllegalArgumentException("Given main identifier is not declared");
        
        this.declarations = List.copyOf(declarations);
        this.mainId = mainId;
    }

    public List<Declaration> declarations() {
        return declarations;
    }

    public Identifier mainId() { return mainId; }
}
