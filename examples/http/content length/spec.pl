:- module(spec,[trace_expression/2, match/3]).

% should be something like this
%match(req(ID, CL), req(ID, CL)).
%match(write(ID, L), write(ID, CL, CL2)) :- CL2 is CL-L.
%match(end(ID, L), end(ID, CL)) :- L=CL.

% event domain
:- file_search_path(node, X), writeln(user_output, X).
:- use_module(node(func_match)).

% top-level filter
match(http_content_length, Json, filter) :- func_post(Json, 'http.request', _, _, _).
match(http_content_length, Json, filter) :- func_pre(Json, 'write', _, _, _).
match(http_content_length, Json, filter) :- func_pre(Json, 'end', _, _, _).

% event types
% ID: unique HTTP request identifier
% CL: content-length

match(http_content_length, Json, chunk_req(ID)) :-
	func_post(Json, 'http.request', Args, _, ID),
	Args = [json(Opts)|_],
	(member(headers=json(Hs), Opts) ->
		not(member('content-length'=_, Hs));
		true).

match(http_content_length, Json, req(ID, CL)) :-
	func_post(Json, 'http.request', Args, _, ID),
	Args = [json(Opts)|_],
	member(headers=json(Hs), Opts),
	%TODO case-insensitive check
	member('content-length'=CL, Hs).

match(http_content_length, Json, write(ID)) :- func_pre(Json, 'write', _, _, ID).
match(http_content_length, Json, end(ID))   :- func_pre(Json, 'end',   _, _, ID).

%TODO see what happens if data in JS is a Buffer instance
match(http_content_length, Json, write(ID, CL, CL2)) :-
	func_pre(Json, 'write', _, Args, ID),
	Args = [Data|_],
	atom_length(Data, L),
	CL2 is CL-L.

%TODO see what happens if data in JS is a Buffer instance
match(http_content_length, Json, end(ID, L)) :-
	func_pre(Json, 'end', _, Args, ID),
	Args = [Data|_],
	atom_length(Data, L).

% trace expression
trace_expression(http_content_length, T) :-
	T = filter >> (epsilon \/ Chunked \/ Unchunked),
	Chunked = var(ID, chunk_req(ID):(Writes|T)),
	Writes = (write(ID):Writes) \/ End,
	End = end(ID):epsilon, 
	Unchunked = var(ID, var(CL, req(ID, CL):(W|T))),
	W = var(CL2, write(ID, CL,  CL2):W2) \/ E,
	W2 = var(CL,  write(ID, CL2, CL ):W ) \/ E2,
	E = end(ID, CL) :epsilon,
	E2 = end(ID, CL2):epsilon,
	numbervars(T, 0, _).
