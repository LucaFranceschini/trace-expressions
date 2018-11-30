package prolog.ast;

import java.util.List;

public final class Program {
    private final List<Rule> rules;

    public Program(List<Rule> rules) {
        this.rules = List.copyOf(rules);
    }
}