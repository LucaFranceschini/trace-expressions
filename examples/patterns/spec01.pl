:- module(spec,[trace_expression/2, match/2]).

:- use_module(node(func_match)).

match(Json, filter) :- func_pre_name(Json , Name), member(Name,['open','consume','close']).

match(Json, filter) :- func_post_name(Json , 'open').
     
match(Json, open(ResId)) :- func_post(Json, 'open', _Args, _Res, ResId).

match(Json, consume(TargetId)) :- func_pre(Json, 'consume', _Id, _Args, _ArgIds, TargetId).

match(Json, close(TargetId)) :- func_pre(Json, 'close', _Id, _Args, _ArgIds, TargetId).

match(Json, target(ResId)) :- match(Json,open(ResId));match(Json,consume(ResId));match(Json,close(ResId)).

%% this spec enforces that open can never be called twice with the same resId
trace_expression('test', filter >> Main) :-    
    Main = var(resId, open(var(resId)) : (Cons | (target(var(resId))>>0;Main))), %% 0 always fails, necessary to take into account events for which Cons fails 
    Cons = (close(var(resId)) : eps) \/ (consume(var(resId)) : Cons). 

%% a simple test    
%% trace_expression(_,T0),next(T0,_{event:func_post,name:open,args:[],res:0,resultId:41},T1),next(T1,_{event:func_post,name:open,args:[],res:0,resultId:42},T2),next(T2,_{event:func_pre,name:close,args:[],argIds:[],id:0,targetId:41},T3).
    
