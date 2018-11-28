package rml.ast.visitor;

import rml.ast.*;

public interface ExpVisitor<T> {
    T visit(EventType eventType);
    T visit(CatExp catExp);
    T visit(AndExp andExp);
    T visit(OrExp orExp);
    T visit(ShufExp shufExp);
    T visit(EpsExp epsExp);
    T visit(Identifier identifier);
}
