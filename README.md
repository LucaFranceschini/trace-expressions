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

    $ swipl -p node=<prolog dir path> -- <spec path>

Where `<prolog dir path>` points to the folder containing the module `func_match.pl` (folder `prolog` of this repo), and `<spec path>` points to the Prolog trace expression specification.

The server will listen on the port `8081`.
To exit the interactive Prolog interpreter type `halt.`.

## npm dependencies
To install Node.js npm dependencies (Jalangi2, Express, ...) run

    npm i

## Jalangi2 Instrumentation
[Jalangi2](https://github.com/Samsung/jalangi2) is a framework for dynamic analysis of JavaScript, based on code instrumentation.

To execute a script with Node.js, instrumenting on-the-fly with our function invocation analysis, run

    $ node <repo path>/node_modules/jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis <repo path>/jalangi/functionInvocationAnalysis.js <javascript file to run>

## Examples
Different examples can be found in `examples`.
Every folder is a different example and usually contains the following files
- "good" (correct) and "bad" (buggy) version of example;
- Prolog specification file (`.pl`);
- `readme` explaining what is wrong about the example;
- `transpiled` directory with ES5 code (for Jalangi2), if needed.
