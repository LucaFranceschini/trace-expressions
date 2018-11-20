%%% Specification for queues  %%%

:- module(spec,[trace_expression/2, match/2, gtzero/1, inc/2]).

:- use_module(node(func_match)).

match(Json, filter) :- func_pre_name(Json, 'enq').

match(Json, filter) :- func_post_name(Json , 'deq').

match(Json, enq(Elem)) :- func_pre(Json, 'enq', _Id, [Elem], _TargetId).

match(Json, deq(Elem)) :- func_post(Json, 'deq', _Args, Elem).

match(Json, enq) :- match(Json, enq(_Elem)).

match(Json, deq) :- match(Json, deq(_Elem)).

gtzero(N) :- N > 0.

inc(M,N) :- integer(M),N is M+1,!;integer(N),M is N-1.
    
%% this spec enforces that acquire(resId) cannot follow another acquire(resId) without a release(resId) in between
trace_expression('test', filter >>  app(Queue,0)) :- 
    Queue = gen(size,
		eps\/
		(enq:var(newSize,
			 guarded(inc(var(size),var(newSize)),1,0)/\ %% this should be a derived operator  
			 app(Queue,var(newSize))
			))\/
		guarded(
			gtzero(var(size)),
			deq:var(newSize,
				guarded(inc(var(newSize),var(size)),1,0)/\ %% this should be a derived operator  
				app(Queue,var(newSize))
			       ),
			0)
	       ).

%% a simple test
%% trace_expression(_,T0),next(T0,_{event:func_pre,name:enq,args:[1],id:0,targetId:0},T1), next(T1,_{event:func_pre,name:enq,args:[2],id:0,targetId:0},T2),next(T2,_{event:func_post,name:deq,args:[],res:1},T3),next(T3,_{event:func_pre,name:enq,args:[3],id:0,targetId:0},T4).
