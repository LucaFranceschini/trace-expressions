package rml.ast;

import java.util.Objects;

public abstract class BinaryExp implements Exp {
    private final Exp left, right;

    public BinaryExp(Exp left, Exp right) {
        this.left = Objects.requireNonNull(left);
        this.right = Objects.requireNonNull(right);
    }

    public Exp left() {
        return left;
    }

    public Exp right() {
        return right;
    }
}
