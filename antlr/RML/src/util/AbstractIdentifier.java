package util;

import java.util.Objects;

public abstract class AbstractIdentifier {
    private final String name;

    public AbstractIdentifier(String name) {
        Objects.requireNonNull(name);
        if (!name.matches("[A-Za-z_][A-Za-z0-9_]*"))
            throw new IllegalArgumentException("invalid characters");

        this.name = name;
    }

    public String name() {
        return name;
    }

    @Override
    public final boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        AbstractIdentifier that = (AbstractIdentifier) o;
        return name.equals(that.name);
    }

    @Override
    public final int hashCode() {
        return Objects.hash(name);
    }
}
