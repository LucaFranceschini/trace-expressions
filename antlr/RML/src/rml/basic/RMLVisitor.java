// Generated from RML.g4 by ANTLR 4.7.1
package basic;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link RMLParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface RMLVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link RMLParser#main}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMain(RMLParser.MainContext ctx);
	/**
	 * Visit a parse tree produced by {@link RMLParser#dec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDec(RMLParser.DecContext ctx);
	/**
	 * Visit a parse tree produced by the {@code par}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPar(RMLParser.ParContext ctx);
	/**
	 * Visit a parse tree produced by the {@code or}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOr(RMLParser.OrContext ctx);
	/**
	 * Visit a parse tree produced by the {@code shuf}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShuf(RMLParser.ShufContext ctx);
	/**
	 * Visit a parse tree produced by the {@code evtype}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEvtype(RMLParser.EvtypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code var}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVar(RMLParser.VarContext ctx);
	/**
	 * Visit a parse tree produced by the {@code and}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnd(RMLParser.AndContext ctx);
	/**
	 * Visit a parse tree produced by the {@code cat}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCat(RMLParser.CatContext ctx);
	/**
	 * Visit a parse tree produced by the {@code eps}
	 * labeled alternative in {@link RMLParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEps(RMLParser.EpsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code argsPred}
	 * labeled alternative in {@link RMLParser#eventType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgsPred(RMLParser.ArgsPredContext ctx);
	/**
	 * Visit a parse tree produced by the {@code constPred}
	 * labeled alternative in {@link RMLParser#eventType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstPred(RMLParser.ConstPredContext ctx);
	/**
	 * Visit a parse tree produced by {@link RMLParser#atoms}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtoms(RMLParser.AtomsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code num}
	 * labeled alternative in {@link RMLParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNum(RMLParser.NumContext ctx);
	/**
	 * Visit a parse tree produced by the {@code const}
	 * labeled alternative in {@link RMLParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConst(RMLParser.ConstContext ctx);
	/**
	 * Visit a parse tree produced by the {@code func}
	 * labeled alternative in {@link RMLParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunc(RMLParser.FuncContext ctx);
}