:- module(func_match, [
	func_pre/5, func_pre_name/2, func_pre_names/2,
	func_post/5, func_post_name/2, func_post_names/2,
	cb_pre/5, cb_pre/1, cb_post/5
]).

% low-level JSON parsing

%% Remark: Json.<key> could be used, but it throws an existence error when <key> cannot be found, while JSon.get(<key>) fails silently
%% see http://www.swi-prolog.org/pldoc/man?section=bidicts
parse_json_pre(Json, Json.get(event), Json.get(name), Json.get(id), Json.get(args), Json.get(targetId)).

parse_json_post(Json, Json.get(event), Json.get(name), Json.get(args), Json.get(res), Json.get(resultId)).


% high-level predicates for event types implementation

func_pre(Json, Name, Id, Args, TargetId) :-
	parse_json_pre(Json, func_pre, Name, Id, Args, TargetId).

func_post(Json, Name, Args, Res, ResultId) :-
	parse_json_post(Json, func_post, Name, Args, Res, ResultId).

cb_pre(Json, Name, Id, Args, TargetId) :-
	parse_json_pre(Json, cb_pre, Name, Id, Args, TargetId).

cb_post(Json, Name, Args,  Res, ResultId) :-
	parse_json_post(Json, cb_post, Name, Args, Res, ResultId).


% useful predicates for filters

cb_pre(Json) :- cb_pre(Json, _, _, _, _).

func_pre_name(Json, Name) :- func_pre(Json, Name, _, _, _).
func_pre_names(Json, Names) :- member(Name, Names), func_pre_name(Json, Name).

func_post_name(Json, Name) :- func_post(Json, Name, _, _, _).
func_post_names(Json, Names) :- member(Name, Names), func_post_name(Json, Name).
