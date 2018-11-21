%%% Specification for queues  %%%

:- module(spec,[trace_expression/2, match/2]).

:- use_module(node(func_match)).

match(Json, filter) :- match(Json, enq).

match(Json, filter) :- match(Json, deq).

match(Json, enq(Elem,Size,NewSize)) :- func_pre(Json, 'enq', _Id, [Elem], _TargetId),integer(Size),NewSize is Size+1.

match(Json, deq(Elem,Size,NewSize)) :- func_post(Json, 'deq', _Args, Elem),integer(Size),Size>0,NewSize is Size-1.

match(Json, enq(Size,NewSize)) :- match(Json, enq(_Elem,Size,NewSize)).

match(Json, deq(Size,NewSize)) :- match(Json, deq(_Elem,Size,NewSize)).

match(Json, enq) :- func_pre_name(Json, 'enq').

match(Json, deq) :- func_post_name(Json , 'deq').

trace_expression('test0', filter >> Queue) :-  %% simpler solution with shuffle
    Queue = eps\/(enq:((deq:eps)|Queue)).

trace_expression('test1', filter >>  app(Queue,0)) :- %% more advanced solution, adaptable to check also enqueued elements
    Queue = gen(size,
		eps\/
		var(newSize,enq(var(size),var(newSize)):app(Queue,var(newSize)))\/
		var(newSize,deq(var(size),var(newSize)):app(Queue,var(newSize)))
	       ).

%% a simple test
%% trace_expression(test0,T0),next(T0,_{event:func_pre,name:enq,args:[1],id:0,targetId:0},T1), next(T1,_{event:func_pre,name:enq,args:[2],id:0,targetId:0},T2),next(T2,_{event:func_post,name:deq,args:[],res:1},T3),next(T3,_{event:func_pre,name:enq,args:[3],id:0,targetId:0},T4),next(T4,_{event:func_post,name:deq,args:[],res:1},T5),next(T5,_{event:func_post,name:deq,args:[],res:1},T6),next(T6,_{event:func_pre,name:enq,args:[1],id:0,targetId:0},T7).

%% trace_expression(test1,T0),next(T0,_{event:func_pre,name:enq,args:[1],id:0,targetId:0},T1), next(T1,_{event:func_pre,name:enq,args:[2],id:0,targetId:0},T2),next(T2,_{event:func_post,name:deq,args:[],res:1},T3),next(T3,_{event:func_pre,name:enq,args:[3],id:0,targetId:0},T4),next(T4,_{event:func_post,name:deq,args:[],res:1},T5),next(T5,_{event:func_post,name:deq,args:[],res:1},T6),next(T6,_{event:func_pre,name:enq,args:[1],id:0,targetId:0},T7).
