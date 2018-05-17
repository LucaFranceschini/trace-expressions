:- module(spec,[trace_expression/2, match/3]).

:- discontiguous match/3.
:- discontiguous event/2.

:- use_module(node(func_match)).

match(response204,json(O), filter) :- cb_pre(json(O) , _ , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), filter) :- func_pre(json(O) , 'http.createServer' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), filter) :- func_pre(json(O) , 'write' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), filter) :- func_pre(json(O) , 'writeHead' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), filter) :- func_pre(json(O) , 'end' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), createServer(Id)) :- func_pre(json(O) , 'http.createServer' , Id , _ , _).
event(response204, json(O)).

match(response204,json(O), callback(Id)) :- cb_pre(json(O) , _ , Id , _ , _).
event(response204, json(O)).

match(response204,json(O), write) :- func_pre(json(O) , 'write' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), end) :- func_pre(json(O) , 'end' , _ , _ , _).
event(response204, json(O)).

match(response204,json(O), writeHead204) :- func_pre(json(O) , 'writeHead' , _ , [204|_] , _).
event(response204, json(O)).

match(response204,json(O), writeHeadNo204) :- func_pre(json(O) , 'writeHead' , _ , [Code|_] , _) , Code \= 204.
event(response204, json(O)).

match(response204,json(O), endNoBody) :- func_pre(json(O) , 'end' , _ , [] , _).
event(response204, json(O)).

match(response204,json(O), endNoBody) :- func_pre(json(O) , 'end' , _ , [MaybeChunk|_] , _) , not(string_chars(MaybeChunk , _)).
event(response204, json(O)).


trace_expression('response204', Main) :-
Main = (filter >> var( Id, (createServer(Id) :Start))),
Start = ((((write : Written) \/ (end : Start)) \/ (writeHead204 : Head204)) \/ (writeHeadNo204 : Written)),
Written = (((write : Written) \/ (end : Start)) \/ (writeHeadNo204 : Written)),
Head204 = (endNoBody : Start),
numbervars(Main, 0, _).
