package util;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

// generic T(U1, ..., Un) term
public abstract class AbstractFunctionTerm<T, U> {
    private final T id;
    private final List<U> args;

    protected AbstractFunctionTerm(T id, List<? extends U> args) {
        this.id = Objects.requireNonNull(id);
        this.args = List.copyOf(args);
    }

    protected AbstractFunctionTerm(T id) {
        this(id, Collections.emptyList());
    }

    public T identifier() {
        return id;
    }

    public List<U> arguments() {
        return args;
    }
}
