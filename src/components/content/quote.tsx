import { useState, useCallback } from "preact/hooks";
import { RefreshCcw } from "lucide-preact";
import { quotes } from "../../lib/quotes";

function shuffle(): number[] {
    const indices = Array.from({ length: quotes.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
}

export default function Quote() {
    const [deck, setDeck] = useState(shuffle);
    const [pos, setPos] = useState(0);

    const next = useCallback(() => {
        setPos(p => {
            const nextPos = p + 1;
            if (nextPos >= deck.length) {
                const last = deck[p];
                let newDeck: number[];
                do { newDeck = shuffle(); } while (newDeck[0] === last);
                setDeck(newDeck);
                return 0;
            }
            return nextPos;
        });
    }, [deck]);

    return (
        <div class="quote-card">
            <blockquote>"{quotes[deck[pos]][0]}"</blockquote>
            <div class="quote-card-footer">
                <button
                    class="quote-refresh"
                    onClick={next}
                    title="Next quote"
                >
                    <RefreshCcw size={12} />
                </button>
                <span class="quote-attribution">— {quotes[deck[pos]][1]}</span>
            </div>
        </div>
    );
}
