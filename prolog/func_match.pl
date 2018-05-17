:- module(func_match, [
	func_pre/5, func_pre_name/2, func_pre_names/2,
	func_post/5, func_post_name/2, func_post_names/2,
	cb_pre/5, cb_pre/1, cb_post/5
]).

% low-level JSON parsing

parse_json_pre(json(O), Event, Name, Id, Args, TargetId) :-
	member(event=Event, O),
	member(name=Name, O),
	member(id=Id, O),
	member(args=Args, O),
	member(targetId=TargetId, O).

parse_json_post(json(O), Event, Name, Args, Res, ResultId) :-
	member(event=Event, O),
	member(name=Name, O),
	member(args=Args, O),
	member(res=Res, O),
	member(resultId=ResultId, O).


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
