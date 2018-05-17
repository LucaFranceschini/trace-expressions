:- module(spec,[trace_expression/2, match/3]).

:- use_module(node(func_match)).

match(fs_many, Json, open(ID)) :- func_pre(Json, 'fs.open', ID, _, _).
match(fs_many, Json, opencb(ID, FD)) :- cb_pre(Json, _, ID, [_,FD|_], _).

match(fs_many, Json, write(ID, FD)) :- func_pre(Json, 'fs.write', ID, [FD|_], _).
match(fs_many, Json, close(ID, FD)) :- func_pre(Json, 'fs.close', ID, [FD|_], _).
match(fs_many, Json, cb(ID)) :- cb_pre(Json, _, ID, _, _).

% only consider callbacks and fs operations
match(fs_many, Json, myfilter) :- cb_pre(Json, _, _, _, _).
match(fs_many, Json, myfilter) :- func_pre(Json, NameString, _, _, _),
                                  string_chars(NameString, ['f','s','.'|_]).

trace_expression(fs_many, T) :-
	T  = myfilter >> (epsilon \/ var(ID, open(ID):(Tf|T))),
	Tf = var(FD, opencb(ID, FD):W),
	W  = var(ID2, write(ID2, FD):cb(ID2):W) \/ var(ID3, close(ID3, FD):cb(ID3):epsilon),
	numbervars(T, 0, _).
