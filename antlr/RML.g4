grammar RML;

WS  : [ \t\r\n]+ -> skip ;
NUM : '0'|[1-9][0-9]* ;
ID: [a-z][a-zA-Z0-9_]* ;
VAR: [A-Z][a-zA-Z0-9_]* ;

main : dec+ EOF;
dec : VAR '=' exp ;
exp :  eventType #evtype |
         <assoc=right> exp exp #cat |
          exp '/\\' exp #and |
	  exp '\\/' exp #or |
	  exp '|' exp #shuf |
	  '(' exp ')'  #par |
	  'eps' #eps |
	   VAR #var;

eventType:  ID'('atoms')' #argsPred | ID #constPred;

atoms: atom (',' atom)*;

atom: NUM #num | ID #const | ID'('atoms')' #func;
