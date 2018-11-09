package basic;

import ast.*;
import org.antlr.v4.runtime.tree.TerminalNode;

import java.util.List;
import java.util.stream.Collectors;

import static basic.RMLParser.*;

public final class SpecBuilder {
    private SpecBuilder() {
        assert false;
    }

    private static class ExpBuilder extends RMLBaseVisitor<Exp> {
        @Override
        public Exp visitEvtype(EvtypeContext evtype) {
            return evtype.accept(this);
        }

        @Override
        public CatExp visitCat(CatContext cat) {
            var left = cat.exp(0).accept(this);
            var right = cat.exp(1).accept(this);
            return new CatExp(left, right);
        }

        @Override
        public AndExp visitAnd(AndContext and) {
            var left = and.exp(0).accept(this);
            var right = and.exp(1).accept(this);
            return new AndExp(left, right);
        }

        @Override
        public OrExp visitOr(OrContext or) {
            var left = or.exp(0).accept(this);
            var right = or.exp(1).accept(this);
            return new OrExp(left, right);
        }

        @Override
        public ShufExp visitShuf(ShufContext shuf) {
            var left = shuf.exp(0).accept(this);
            var right = shuf.exp(1).accept(this);
            return new ShufExp(left, right);
        }

        @Override
        public EpsExp visitEps(EpsContext eps) {
            return EpsExp.INSTANCE;
        }

        @Override
        public Identifier visitVar(VarContext var) {
            return SpecBuilder.buildId(var.VAR());
        }

        @Override
        public EventType visitArgsPred(ArgsPredContext funcEvtype) {
            var id = buildId(funcEvtype.ID());
            var args = buildAtoms(funcEvtype.atoms());
            return new EventType(id, args);
        }

        @Override
        public EventType visitConstPred(ConstPredContext constPred) {
            var id = buildId(constPred.ID());
            return new EventType(id);
        }
    }

    private static class AtomBuilder extends RMLBaseVisitor<Atom> {
        @Override
        public NumAtom visitNum(NumContext num) {
            return new NumAtom(Integer.parseInt(num.getText()));
        }

        @Override
        public FuncAtom visitConst(ConstContext cons) {
            var id = buildId(cons.ID());
            return new FuncAtom(id);
        }

        @Override
        public FuncAtom visitFunc(FuncContext func) {
            var id = buildId(func.ID());
            var atoms = buildAtoms(func.atoms());
            return new FuncAtom(id, atoms);
        }
    }

    public static Spec build(MainContext main) {
        var decs = main.dec().stream().map(SpecBuilder::buildDec).collect(Collectors.toList());
        return new Spec(decs);
    }

    private static Declaration buildDec(DecContext dec) {
        var id = buildId(dec.VAR());
        var body = dec.exp().accept(new ExpBuilder());
        return new Declaration(id, body);
    }

    private static Identifier buildId(TerminalNode node) {
        return new Identifier(node.getText());
    }

    private static List<Atom> buildAtoms(AtomsContext atoms) {
        return atoms.atom().stream().map(a -> a.accept(new AtomBuilder())).collect(Collectors.toList());
    }
}
