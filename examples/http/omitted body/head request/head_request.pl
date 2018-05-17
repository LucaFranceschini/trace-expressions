:- module(spec,[trace_expression/2, match/3]).

:- discontiguous match/3.
:- discontiguous event/2.

:- use_module(node(func_match)).

match(head_request,json(O), filter) :- func_pre_name(json(O) , 'end').
event(head_request, json(O)).

match(head_request,json(O), filter) :- func_post_name(json(O) , 'http.request').
event(head_request, json(O)).

match(head_request,json(O), request(ReqId)) :- func_post(json(O) , 'http.request' , [json(Options)|_] , _ , ReqId) , member(method = 'HEAD' , Options).
event(head_request, json(O)).

match(head_request,json(O), endWithoutData(ReqId)) :- func_pre(json(O) , 'end' , _ , [] , ReqId).
event(head_request, json(O)).

match(head_request,json(O), endWithoutData(ReqId)) :- func_pre(json(O) , 'end' , _ , [MaybeChunk|_] , ReqId) , not(string_chars(MaybeChunk , _)).
event(head_request, json(O)).


trace_expression('head_request', Main) :-
Main = (filter >> var( ReqId, (request(ReqId) :((((endWithoutData(ReqId) :epsilon)) | Main))))),
numbervars(Main, 0, _).
