package ast;

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
}
