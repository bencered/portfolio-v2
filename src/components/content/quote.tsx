import { useState, useEffect } from "preact/hooks";
import { RefreshCcw } from "lucide-preact";

const quotes = [
    ["Overconfidence is a slow and insidious killer.", "Darkest Dungeon"],
    ["An idiot admires complexity, a genius admires simplicity.", "Terry Davis"],
    ["If I must fall, I will rise each time a better man.", "Dalinar Kholin"],
    ["Abolish the idea of winning by \"chance\", and claim victory as a logical consequence.", "Blue Lock"],
    ["Your real ability only consists of what you can actually do when it counts.", "Blue Lock"],
    ["The longer you live, the more you fail. Failure is the mark of a life well lived.", "Wit"],
    ["The trick to happiness wasn't in freezing every momentary pleasure, but in ensuring one's life would produce many future moments to anticipate.", "Brandon Sanderson"],
    ["The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step.", "Dalinar Kholin"],
    ["My memory is to the world as a drawing is to the photograph. Imperfect. More perfect.", "Hadrian Marlowe"],
    ["The artist sees things not in terms of what is or might be, but in terms of what must be.", "Hadrian Marlowe"],
    ["When my bird was looking at my computer monitor, I thought, 'Woah, that bird has no idea what he's looking at.' And yet what does the bird do? Does he panic? No. He just does the best he can.", "Terry Davis"],
    ["And so, does the destination matter? Or is it the path we take? It is the journey that shapes us.", "Brandon Sanderson"],
];

function random(exclude?: number): number {
    let i: number;
    do { i = Math.floor(Math.random() * quotes.length); } while (i === exclude);
    return i;
}

export default function Quote() {
    const [idx, setIdx] = useState(() => random());

    return (
        <div class="quote-card">
            <blockquote>"{quotes[idx][0]}"</blockquote>
            <div class="quote-card-footer">
                <button
                    class="quote-refresh"
                    onClick={() => setIdx(i => random(i))}
                    title="Next quote"
                >
                    <RefreshCcw size={12} />
                </button>
                <span class="quote-attribution">— {quotes[idx][1]}</span>
            </div>
        </div>
    );
}
