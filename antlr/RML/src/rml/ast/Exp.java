package rml.ast;

import rml.ast.visitor.ExpVisitor;

public interface Exp {
    <T> T accept(ExpVisitor<T> visitor);
}
