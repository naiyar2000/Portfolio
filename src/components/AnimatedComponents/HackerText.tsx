import React, { useEffect, useRef, useState } from 'react'

type HackerTextProps = {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    characters?: string;
}

const HackerText = ({ className, style, text, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }: HackerTextProps) => {

    const textRef = useRef<HTMLSpanElement>(null);
    const [textState, setTextState] = useState(text);
    const interval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseOver = () => {
            let iteration = 0;

            if (interval.current) {
                clearInterval(interval.current);
            }

            if (textRef.current) {
                interval.current = setInterval(() => {
                    setTextState((prevTextState) =>
                        prevTextState.split("").map((letter, index) =>
                            index < iteration ? text[index] : characters[Math.floor(Math.random() * characters.length)]
                        ).join("")
                    );

                    if (iteration >= text.length) {
                        if (interval.current) {
                            clearInterval(interval.current);
                        }
                    }

                    iteration += 1 / 3;
                }, 30);
            }
        };

        const element = textRef.current;
        if (element) {
            element.addEventListener("mouseover", handleMouseOver);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseover", handleMouseOver);
            }
        };
    }, [text]);

    return (
        <span ref={textRef} className={className} style={style}>{textState}</span>
    )
}

export default HackerText