import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
    ref: MutableRefObject<HTMLDivElement | null>;
    scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ExperienceSection3 = () => {
    // Initial state for cards
    const [cards] = useState<Card[]>([
        { id: 1, title: 'Card 1', description: 'This is the first card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 2, title: 'Card 2', description: 'This is the second card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 3, title: 'Card 3', description: 'This is the third card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 4, title: 'Card 4', description: 'This is the fourth card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
        { id: 5, title: 'Card 5', description: 'This is the fifth card in the stack.', ref: useRef<HTMLDivElement>(null), scrollRef: useRef<HTMLDivElement>(null) },
    ]);


    return (
        <section className="h-screen">
            <div className="relative no-scrollbar h-full">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        ref={card.ref}
                        style={{
                            top: `${index * 1.5}rem`,
                        }}
                        className={`px-20 sticky -z-20 w-full h-full`}
                    >
                        <div className="bg-glass w-1/2 h-2/3 m-auto">
                            <h3 className="text-white text-xl font-bold">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection3;
