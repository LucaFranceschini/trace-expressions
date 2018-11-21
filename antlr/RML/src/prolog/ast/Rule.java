package prolog.ast;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

public final class Rule {
    private final Atom head;
    private final List<Atom> body;

    public Rule(Atom head, List<Atom> body) {
        this.head = Objects.requireNonNull(head);
        this.body = List.copyOf(body);
    }

    public Rule(Atom head) {
        this(head, Collections.emptyList());
    }

    public Atom head() {
        return head;
    }

    public List<Atom> body() {
        return body;
    }
}