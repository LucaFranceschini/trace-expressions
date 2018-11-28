package rml.ast;

import rml.ast.visitor.DeclVisitor;

import java.util.Objects;

public final class Declaration {
    private final Identifier id;
    private final Exp body;

    public Declaration(Identifier id, Exp body) {
        this.id = Objects.requireNonNull(id);
        this.body = Objects.requireNonNull(body);
    }

    public Identifier identifier() {
        return id;
    }

    public Exp body() {
        return body;
    }

    public <T> T accept(DeclVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
