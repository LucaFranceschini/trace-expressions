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
