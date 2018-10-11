:- use_module(library(http/websocket)).
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_client)).
:- use_module(library(http/json)).
:- use_module(library(http/json_convert)).
:- use_module(library(http/http_json)).

:- use_module(trace_expressions_semantics).

:- http_handler(/,http_upgrade_to_websocket(manage_event, []),[]). %%% default options for both the websocket and the http handler 

%% arguments
%% the server expects a required first argument: the filename containing the specified trace expression
%% second optional argument: a log file, if not provided no logging is performed

%% example:
%% swipl -p node=prolog prolog/server.pl -- http/omitted\ body/204\ response/spec.pl prolog_server_log.txt
%% -p node=prolog
%%          required option to indicate the path to func_match.pl (event domain implementation)
%%  http/omitted\ body/204\ response/spec.pl
%%          the trace expression (required argument)
%%  prolog_server_log.txt
%%          logging enabled to file prolog_server_log.txt (optional argument)

% load specification

:- current_prolog_flag(argv, [Spec|_]), use_module(Spec).

server(Port) :- http_server(http_dispatch,[port(localhost:Port),workers(1)]). %% one worker to guarantee event sequentiality

log(TE,E) :- nb_getval(log,Stream), Stream\==null->writeln(Stream,"Trace expression:"),writeln(Stream,TE),writeln(Stream,"Event: "),writeln(Stream,E),writeln(Stream, ''),flush_output(Stream);true. %% optional logging of server activity

%% DOES NOT WORK BECAUSE OF ISSUE WITH JSON DICTS %%
%% manage_event(WebSocket) :-
%%     ws_receive(WebSocket, Msg, [format(json)]), 
%%     (Msg.opcode==close ->
%% 	     true;
%% 	 E=Msg.data,
%% 	       nb_getval(state,TE1),
%% 	       log(TE1,E),
%% 	       (next(TE1,E,TE2) -> nb_setval(state,TE2);true),
%% 	       manage_event(WebSocket)).

%% patched version
manage_event(WebSocket) :-
    ws_receive(WebSocket, Msg), %% uses string as default format 
    (Msg.opcode==close ->
	     true;
	 open_string(Msg.data,S),
	       nb_getval(state,TE1),
	       log(TE1,Msg.data),
	       (next(TE1,S,TE2) -> nb_setval(state,TE2);true),
	       manage_event(WebSocket)).

exception(undefined_global_variable, state, retry) :- trace_expression(_, TE), nb_setval(state,TE).
exception(undefined_global_variable, log, retry) :- (current_prolog_flag(argv, [_,LogFile|_])->open(LogFile,write,Stream);Stream=null),nb_setval(log, Stream).

:- server(8081).
