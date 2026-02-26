import { RefreshCcw } from "lucide-preact";
import { signal } from '@preact/signals';

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
];

let randomQuote = signal(["", ""]);

const Quote = () => {
    if (typeof window === "undefined") {
        return (
            <div class="quote-card">
                <div style="height:3rem;background:rgba(255,255,255,0.04);border-radius:0.25rem"></div>
            </div>
        );
    }

    if (!randomQuote.value[0]) {
        randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    }

    const next = () => {
        const cur = randomQuote.value;
        let n;
        do { n = quotes[Math.floor(Math.random() * quotes.length)]; } while (n[0] === cur[0]);
        randomQuote.value = n;
    };

    return (
        <div class="quote-card">
            <blockquote>"{randomQuote.value[0]}"</blockquote>
            <div class="quote-card-footer">
                <span class="quote-attribution">— {randomQuote.value[1]}</span>
                <button class="quote-refresh" onClick={next} title="Next quote">
                    <RefreshCcw size={12} />
                </button>
            </div>
        </div>
    );
};

export default Quote;
