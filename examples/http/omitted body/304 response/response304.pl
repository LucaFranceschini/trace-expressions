:- module(spec,[trace_expression/2, match/3]).

:- discontiguous match/3.
:- discontiguous event/2.

:- use_module(node(func_match)).

match(response304,json(O), filter) :- func_pre(json(O) , 'http.createServer' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), filter) :- func_pre(json(O) , 'write' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), filter) :- func_pre(json(O) , 'writeHead' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), filter) :- func_pre(json(O) , 'end' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), createServer(Id)) :- func_pre(json(O) , 'http.createServer' , Id , _ , _).
event(response304, json(O)).

match(response304,json(O), write) :- func_pre(json(O) , 'write' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), end) :- func_pre(json(O) , 'end' , _ , _ , _).
event(response304, json(O)).

match(response304,json(O), writeHead304) :- func_pre(json(O) , 'writeHead' , _ , [304|_] , _).
event(response304, json(O)).

match(response304,json(O), writeHeadNo304) :- func_pre(json(O) , 'writeHead' , _ , [Code|_] , _) , Code \= 304.
event(response304, json(O)).

match(response304,json(O), endNoBody) :- func_pre(json(O) , 'end' , _ , [] , _).
event(response304, json(O)).

match(response304,json(O), endNoBody) :- func_pre(json(O) , 'end' , _ , [MaybeChunk|_] , _) , not(string_chars(MaybeChunk , _)).
event(response304, json(O)).


trace_expression('response304', Main) :-
Main = (filter >> var( Id, (createServer(Id) :Start))),
Start = ((((write : Written) \/ (end : Start)) \/ (writeHead304 : Head304)) \/ (writeHeadNo304 : Written)),
Written = (((write : Written) \/ (end : Start)) \/ (writeHeadNo304 : Written)),
Head304 = (endNoBody : Start),
numbervars(Main, 0, _).
