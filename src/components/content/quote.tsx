import { RefreshCcw } from "lucide-preact";
import { signal } from '@preact/signals';

const quotes = [
    ["Overconfidence is a slow and insidious killer.", "Darkest Dungeon"],
    ["An idiot admires complexity, a genius admires simplicity. The more complicated something is, the more an idiot will admire it. If you make something so clusterfucked he can't understand it, he's gonna think you're a god.", "Terry Davis"],
    ["If I must fall, I will rise each time a better man.", "Dalinar Kholin"],
    ["Abolish the idea of winning by \"chance\", and claim victory as a logical consequence.", "Blue Lock"],
    ["Your real ability only consists of what you can actually do when it counts.", "Blue Lock"],
    ["When my bird was looking at my computer monitor, I thought, 'Woah, that bird has no idea what he's looking at.' And yet what does the bird do? Does he panic? No, he can't really panic, he just does the best he can. Is he able to live in a world where he's so ignorant? Well, he doesn't really have a choice. The bird is okay even though he doesn't understand the world. You're that bird looking at the monitor, and you're thinking to yourself, I can figure this out. Maybe you have some bird ideas. Maybe that's the best you can do.", "Terry Davis"],
    ["The question, is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path.", "Jasnah Kholin"],
    ["The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone. Trust me, I've practiced.", "Wit"],
    ["The trick to happiness wasn't in freezing every momentary pleasure and clinging to each one, but in ensuring one's life would produce many future moments to anticipate.", "Brandon Sanderson"],
    ["The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.", "Dalinar Kholin"],
    ["And so, does the destination matter? Or is it the path we take? I declare that no accomplishment has substance nearly as great as the road used to achieve it. We are not creatures of destinations. It is the journey that shapes us. Our callused feet, our backs strong from carrying the weight of our travels, our eyes open with the fresh delight of experiences lived.", "Brandon Sanderson"],
    ["My memory is to the world as a drawing is to the photograph. Imperfect. More perfect. We remember what we must, what we choose to, because it is more beautiful and real than the truth.", "Hadrian Marlowe"],
    ["The artist sees things not in terms of what is or might be, but in terms of what must be. Of what our world must become. This is why a portrait will—to the human observer—always defeat the photograph", "Hadrian Marlowe"],
];

let randomQuote = signal([""])

const Quote = () => {
    if (typeof window == "undefined") {
        return (
            <section class="mb-10 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white p-5">
                <div class="mb-2 h-4 w-full animate-pulse rounded bg-[#f0f0ee]"></div>
                <div class="mb-2 h-4 w-4/5 animate-pulse rounded bg-[#f0f0ee]"></div>
                <div class="mt-3 h-3 w-1/4 animate-pulse rounded bg-[#f0f0ee]"></div>
            </section>
        );
    } else {
        randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
        return (
            <section class="mb-10 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white p-5 hover:border-[rgba(0,0,0,0.14)] transition-colors duration-200">
                <blockquote class="font-mono text-[13px] text-[#555] leading-relaxed italic">
                    "{randomQuote.value[0]}"
                </blockquote>
                <div class="flex items-center gap-2 mt-3">
                    <span class="text-[12px] text-[#aaa]">— {randomQuote.value[1]}</span>
                    <button
                        onClick={() => randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)]}
                        class="text-[#ccc] hover:text-[#4C74FF] transition-colors duration-150 hover:-rotate-180 duration-300 cursor-pointer bg-transparent border-0 p-0 leading-none"
                        title="New quote"
                    >
                        <RefreshCcw size={12} />
                    </button>
                </div>
            </section>
        );
    }
};

export default Quote;
