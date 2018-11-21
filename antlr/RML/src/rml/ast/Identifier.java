package ast;

import java.util.Objects;

public final class Identifier implements Exp {
    private final String name;

    public Identifier(String name) {
        this.name = Objects.requireNonNull(name);
    }

    public String name() {
        return name;
    }
}
