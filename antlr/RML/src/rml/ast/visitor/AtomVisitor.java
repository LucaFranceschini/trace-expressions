package rml.ast.visitor;

import rml.ast.FuncAtom;
import rml.ast.NumAtom;

public interface AtomVisitor<T> {
    T visit(NumAtom numAtom);
    T visit(FuncAtom funcAtom);
}
