# Trace Expressions
## \<Programming>'19 Paper
To compile, in `programming19` directory:
```
$ lualatex main
$ biber main
$ lualatex main
$ lualatex main
```

## Prolog Server
SWI-Prolog needs to be installed.
`cd` into `prolog` directory and then:

    $ swipl -p node=. -- <spec path>

Where `<spec path>` points to the Prolog trace expression specification.

The server will listen on the port `8081`.
To exit the interactive Prolog interpreter type `halt.`.

## npm dependencies
To install Node.js npm dependencies (Jalangi2, Express, ...) run

    npm i

## Jalangi Instrumentation
[Jalangi](https://github.com/Samsung/jalangi2) is a framework for dynamic analysis of JavaScript, based on code instrumentation.

To execute a script with Node.js, instrumenting on-the-fly with our function invocation analysis, run

    $ node <repo path>/node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis <repo path>/jalangi/functionInvocationAnalysis.js <javascript file to run>
