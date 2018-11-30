package rml.ast;

public interface Exp {
    <T> T accept(ExpVisitor<T> visitor);
}
