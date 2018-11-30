package prolog.ast;

import java.nio.charset.StandardCharsets;

// predicate or function symbol
public final class Symbol {
    private final String string;

    public Symbol(String string) {
        if (!StandardCharsets.US_ASCII.newEncoder().canEncode(string))
            throw new IllegalArgumentException("ASCII string expected");

        if (string.chars().anyMatch(Character::isISOControl))
            throw new IllegalArgumentException("Printable characters expected");

        if (string.chars().anyMatch(Character::isWhitespace))
            throw new IllegalArgumentException("Whitespace not allowed");

        this.string = string;
    }

    public String string() { return string; }
}
