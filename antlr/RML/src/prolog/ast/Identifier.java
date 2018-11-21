package prolog.ast;

import java.util.Objects;

public final class Identifier {
    private final String name;

    public Identifier(String name) {
        this.name = Objects.requireNonNull(name);
    }

    public String nam() {
        return name;
    }
}
