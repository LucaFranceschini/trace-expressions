:- module(spec,[trace_expression/2, match/2]).

:- use_module(node(func_match)).

match(Json, filter) :- func_pre_name(Json , Name), member(Name,['open','close']).

match(Json, filter) :- func_post_name(Json , 'open').
     
match(Json, open(ResId)) :- func_post(Json, 'open', _Args, _Res, ResId).

match(Json, open) :- match(Json, open(_)).
    
match(Json, close(TargetId)) :- func_pre(Json, 'close', _Id, _Args, _ArgIds, TargetId).

match(Json, close) :- match(Json, close(_)).

match(Json, target(ResId)) :- match(Json,open(ResId));match(Json,consume(ResId));match(Json,close(ResId)).

%% this spec enforces that open(resId) cannot follow another open(resId) without a close(resId) in between
trace_expression('test', filter >> Main) :-
    Main = var(resId, open(var(resId)) : ((target(var(resId))>>(close(var(resId)):1)) /\ (Close*Main))),
    Close = eps\/(close:Close).

%% a simple test    
%% trace_expression(_,T0),next(T0,_{event:func_post,name:open,args:[],res:0,resultId:41},T1),next(T1,_{event:func_post,name:open,args:[],res:0,resultId:42},T2),next(T2,_{event:func_pre,name:close,args:[],argIds:[],id:0,targetId:41},T3),next(T3,_{event:func_post,name:open,args:[],res:0,resultId:41},T4).
