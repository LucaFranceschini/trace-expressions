:- module(spec,[trace_expression/2, match/3]).

:- discontiguous match/3.
:- discontiguous event/2.

:- use_module(node(func_match)).

match(head_after_end,json(O), filter) :- func_pre_names(json(O) , ['end' , 'writeHead' , 'http.createServer']).
event(head_after_end, json(_)).

match(head_after_end,json(O), createServer) :- func_pre_name(json(O) , 'http.createServer').
event(head_after_end, json(_)).

match(head_after_end,json(O), end(ResponseId)) :- func_pre(json(O) , 'end' , _ , _ , ResponseId).
event(head_after_end, json(_)).

match(head_after_end,json(O), writeHead(ResponseId)) :- func_pre(json(O) , 'writeHead' , _ , _ , ResponseId).
event(head_after_end, json(_)).

match(head_after_end,json(O), notId(ForbiddenId)) :- func_pre(json(O) , _ , _ , _ , ResponseId) , ResponseId \= ForbiddenId.
event(head_after_end, json(_)).

match(head_after_end,json(O), filterId(ResponseId)) :- func_pre(json(O) , _ , _ , _ , ResponseId).
event(head_after_end, json(_)).


trace_expression('head_after_end', Main) :-
Main = (filter >> ((createServer : Start))),
Start = var( ResponseId, ((HeadThenEnd \/ OnlyEnd))),
HeadThenEnd = (writeHead(ResponseId) :((((end(ResponseId) :epsilon)) | Another))),
OnlyEnd = (end(ResponseId) :Another),
Another = (((notId(ResponseId) >> Start)) /\ ((filterId(ResponseId) >> epsilon))),
numbervars(Main, 0, _).
