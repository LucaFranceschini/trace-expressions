package rml.ast.visitor;

import rml.ast.Declaration;

public interface DeclVisitor<T> {
    T visit(Declaration declaration);
}
