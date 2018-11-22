package util;

import java.util.Objects;

public abstract class AbstractIdentifier {
    private final String name;

    public AbstractIdentifier(String name) {
        Objects.requireNonNull(name);
        if (!name.matches("[A-Za-z][A-Za-z0-9_]*"))
            throw new IllegalArgumentException("invalid characters");

        this.name = name;
    }

    public String name() {
        return name;
    }
}
