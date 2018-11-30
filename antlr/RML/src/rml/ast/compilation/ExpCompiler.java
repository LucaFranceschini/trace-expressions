package rml.ast.compilation;

import prolog.ast.*;
import rml.ast.*;
import rml.ast.Atom;
import util.AbstractFunctionTerm;

import java.util.stream.Collectors;

enum ExpCompiler implements ExpVisitor<Term> {
    INSTANCE;

    private enum Operators {
        CONCAT("*"),
        AND("/\\"),
        OR("\\/"),
        SHUFFLE("|"),
        EPSILON("eps");

        final Symbol symbol;

        Operators(String string) {
            this.symbol = new Symbol(string);
        }
    }

    @Override
    public FuncTerm visit(EventType eventType) {
        return visitFunctionTerm(eventType);
    }

    @Override
    public FuncTerm visit(CatExp catExp) {
        return visitBinary(Operators.CONCAT, catExp);
    }

    @Override
    public FuncTerm visit(AndExp andExp) {
        return visitBinary(Operators.AND, andExp);
    }

    @Override
    public FuncTerm visit(OrExp orExp) {
        return visitBinary(Operators.OR, orExp);
    }

    @Override
    public FuncTerm visit(ShufExp shufExp) {
        return visitBinary(Operators.SHUFFLE, shufExp);
    }

    @Override
    public FuncTerm visit(EpsExp epsExp) {
        return new FuncTerm(Operators.EPSILON.symbol);
    }

    @Override
    public Variable visit(Identifier identifier) {
        return new Variable(identifier.name());
    }

    @Override
    public NumTerm visit(NumAtom numAtom) {
        return new NumTerm(numAtom.number());
    }

    @Override
    public FuncTerm visit(FuncAtom funcAtom) {
        return visitFunctionTerm(funcAtom);
    }

    private FuncTerm visitBinary(Operators operator, BinaryExp exp) {
        return new FuncTerm(operator.symbol, exp.left().accept(this), exp.right().accept(this));
    }

    private FuncTerm visitFunctionTerm(AbstractFunctionTerm<Identifier, Atom> functionTerm) {
        var symbol = new Symbol(functionTerm.identifier().name());
        var args = functionTerm.arguments().stream().map(a -> a.accept(this)).collect(Collectors.toList());
        return new FuncTerm(symbol, args);
    }
}
