package rml.ast;

import rml.ast.visitor.AtomVisitor;

public interface Atom {
    <T> T accept(AtomVisitor<T> visitor);
}
