import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
    ref: MutableRefObject<HTMLDivElement | null>;
    scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ExperienceSection2 = () => {
    // Initial state for cards
    const [cards] = useState<Card[]>([
        { id: 1, title: 'Card 1', description: 'This is the first card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 2, title: 'Card 2', description: 'This is the second card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 3, title: 'Card 3', description: 'This is the third card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 4, title: 'Card 4', description: 'This is the fourth card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 5, title: 'Card 5', description: 'This is the fifth card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 6, title: 'Card 6', description: 'This is the sixth card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
    ]);

    const currentCardIndex = useRef(0); // Track the current card index
    const lastScrollY = useRef(0); // Track the last scroll position

    const handleCardChange = (index: number, direction: 'up' | 'down') => {
        // Remove previous card styles
        cards.forEach((card) => card?.ref?.current?.classList.remove('stackcard--current', 'stackcard--out', 'stackcard--previous', 'stackcard--in'));

        if (direction === 'down') {
            cards[index]?.ref?.current?.classList.add('stackcard--out');
            const nextIndex = (index + 1) % cards.length;
            currentCardIndex.current = nextIndex;
            cards[nextIndex]?.ref?.current?.classList.add('stackcard--current');
        } else if (direction === 'up') {
            const prevIndex = index === 0 ? cards.length - 1 : index - 1;
            currentCardIndex.current = prevIndex;
            cards[index]?.ref?.current?.classList.add('stackcard--in');
            cards[prevIndex]?.ref?.current?.classList.add('stackcard--previous');
        }
    };

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        const currentIndex = currentCardIndex.current;
        const currentScrollRef = cards[currentIndex]?.scrollRef.current;

        if (!currentScrollRef) return;

        const scrollTriggerPoint = currentScrollRef.offsetTop - window.innerHeight * 0.7;

        if (currentScroll > lastScrollY.current && currentScroll > scrollTriggerPoint) {
            // Scroll down
            handleCardChange(currentIndex, 'down');
        } else if (currentScroll < lastScrollY.current && currentScroll < scrollTriggerPoint) {
            // Scroll up
            handleCardChange(currentIndex, 'up');
        }

        lastScrollY.current = currentScroll;
    };

    useEffect(() => {
        // Initial card setup
        handleCardChange(cards.length - 1, 'down');

        const onScroll = () => {
            if (!window.requestAnimationFrame) {
                handleScroll();
            } else {
                window.requestAnimationFrame(handleScroll);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section id="stacked-cards" className="py-16 min-h-screen">
            <div className="sticky top-20">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Scroll to Move Cards</h2>
                <div className="stackcards">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            ref={card.ref}
                            className="stackcard transition-all duration-500 ease-in-out"
                        >
                            <h3 className="text-white text-xl font-bold">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {cards.map(({ id, scrollRef }) => (
                <div key={id} ref={scrollRef} className="h-screen"></div>
            ))}
        </section>
    );
};

export default ExperienceSection2;
