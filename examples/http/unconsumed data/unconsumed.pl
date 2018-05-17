:- module(spec,[trace_expression/2, match/3]).

:- discontiguous match/3.
:- discontiguous event/2.

:- use_module(node(func_match)).

match(unconsumed,json(O), filter) :- func_pre(json(O) , 'on' , _ , ['data'|_] , _).
event(unconsumed, json(O)).

match(unconsumed,json(O), filter) :- func_pre(json(O) , 'on' , _ , ['end'|_] , _).
event(unconsumed, json(O)).

match(unconsumed,json(O), onData(ResponseId)) :- func_pre(json(O) , 'on' , _ , ['data'|_] , ResponseId).
event(unconsumed, json(O)).

match(unconsumed,json(O), onEnd(ResponseId)) :- func_pre(json(O) , 'on' , _ , ['end'|_] , ResponseId).
event(unconsumed, json(O)).


trace_expression('unconsumed', filter >> Main) :-
Main = var( ResponseId, (onData(ResponseId) :((((onEnd(ResponseId) :epsilon)) | Main)))),
numbervars(Main, 0, _).
