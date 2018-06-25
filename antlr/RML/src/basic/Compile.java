package basic;

import org.antlr.v4.runtime.tree.ErrorNode;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.RuleNode;
import org.antlr.v4.runtime.tree.TerminalNode;

import basic.RMLParser.AndContext;
import basic.RMLParser.ArgsPredContext;
import basic.RMLParser.AtomContext;
import basic.RMLParser.AtomsContext;
import basic.RMLParser.CatContext;
import basic.RMLParser.ConstContext;
import basic.RMLParser.ConstPredContext;
import basic.RMLParser.DecContext;
import basic.RMLParser.EpsContext;
import basic.RMLParser.EvtypeContext;
import basic.RMLParser.ExpContext;
import basic.RMLParser.FuncContext;
import basic.RMLParser.MainContext;
import basic.RMLParser.NumContext;
import basic.RMLParser.OrContext;
import basic.RMLParser.ParContext;
import basic.RMLParser.ShufContext;
import basic.RMLParser.VarContext;

import static basic.ExpType.*;

public class Compile implements RMLVisitor<ExpType> {

	private static String UNIFY = "=";
	private static String TERMINAL = ".\n";
	private static String CONJ = ",";
	private static String PREFIX_OP = ":";
	private static String CONCAT_OP = "*";
	private static String AND_OP = "/\\";
	private static String OR_OP = "\\/";
	private static String SHUFFLE_OP = "|";
	private static String OPEN_PAR = "(";
	private static String CLOSED_PAR = ")";
	private static String EPSILON = "eps";

	private void emit(String str) {
		System.out.print(str);
	}

	private void emit(TerminalNode termNode) {
		emit(termNode.getText());
	}

	private ExpType visitBinOp(ExpContext leftCtx, String opSym, ExpContext rightCtx) {
		emit(OPEN_PAR);
		tryConversion(leftCtx);
		emit(opSym);
		tryConversion(rightCtx);
		emit(CLOSED_PAR);
		return TRACE_EXP;
	}

	private void tryConversion(ExpContext ctx) {
		emit(OPEN_PAR);
		if (ctx.accept(this) == EVENT_TYPE)
			emit(PREFIX_OP + EPSILON);
		emit(CLOSED_PAR);
	}

	@Override
	public ExpType visit(ParseTree arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ExpType visitChildren(RuleNode arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ExpType visitErrorNode(ErrorNode arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ExpType visitTerminal(TerminalNode arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ExpType visitMain(MainContext ctx) {
		boolean notFirst = false;
		for (DecContext d : ctx.dec()) {
			if (notFirst)
				emit(CONJ);
			else
				notFirst = true;
			d.accept(this);
		}
		emit(TERMINAL);
		return TRACE_EXP;
	}

	@Override
	public ExpType visitDec(DecContext ctx) {
		emit(ctx.VAR());
		emit(UNIFY);
		tryConversion(ctx.exp());
		return TRACE_EXP;
	}

	@Override
	public ExpType visitPar(ParContext ctx) {
		emit(OPEN_PAR);
		ExpType expTy = ctx.exp().accept(this);
		emit(CLOSED_PAR);
		return expTy;
	}

	@Override
	public ExpType visitOr(OrContext ctx) {
		return visitBinOp(ctx.exp(0), OR_OP, ctx.exp(1));
	}

	@Override
	public ExpType visitShuf(ShufContext ctx) {
		return visitBinOp(ctx.exp(0), SHUFFLE_OP, ctx.exp(1));

	}

	@Override
	public ExpType visitEvtype(EvtypeContext ctx) {
		return ctx.eventType().accept(this);
	}

	@Override
	public ExpType visitAnd(AndContext ctx) {
		return visitBinOp(ctx.exp(0), AND_OP, ctx.exp(1));
	}

	@Override
	public ExpType visitCat(CatContext ctx) {
		emit(OPEN_PAR);
		ExpType expTy = ctx.exp(0).accept(this);
		emit(expTy == TRACE_EXP ? CONCAT_OP : PREFIX_OP);
		tryConversion(ctx.exp(1));
		emit(CLOSED_PAR);
		return TRACE_EXP;
	}

	@Override
	public ExpType visitEps(EpsContext ctx) {
		emit(EPSILON);
		return TRACE_EXP;
	}

	@Override
	public ExpType visitArgsPred(ArgsPredContext ctx) {
		emit(ctx.ID());
		emit(OPEN_PAR);
		ctx.atoms().accept(this);
		emit(CLOSED_PAR);
		return EVENT_TYPE;
	}

	@Override
	public ExpType visitConstPred(ConstPredContext ctx) {
		emit(ctx.ID());
		return EVENT_TYPE;
	}

	@Override
	public ExpType visitAtoms(AtomsContext ctx) {
		boolean notFirst = false;
		for (AtomContext atom : ctx.atom()) {
			if (notFirst)
				emit(CONJ);
			else
				notFirst = true;
			atom.accept(this);
		}
		return null;
	}

	@Override
	public ExpType visitNum(NumContext ctx) {
		emit(ctx.NUM());
		return null;
	}

	@Override
	public ExpType visitConst(ConstContext ctx) {
		emit(ctx.ID());
		return null;
	}

	@Override
	public ExpType visitFunc(FuncContext ctx) {
		emit(ctx.ID());
		emit(OPEN_PAR);
		ctx.atoms().accept(this);
		emit(CLOSED_PAR);
		return null;
	}

	@Override
	public ExpType visitVar(VarContext ctx) {
		emit(ctx.VAR());
		return TRACE_EXP;
	}

}
