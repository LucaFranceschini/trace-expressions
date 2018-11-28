package rml.ast.visitor;

import rml.ast.Spec;

public interface SpecVisitor<T> {
    T visitSpec(Spec spec);
}
