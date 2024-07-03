'use client'

import useTyping from "@/hooks/useTyping";

export default function TypingText(props) {
    const content = props.text;
    const {text, isEnd} = useTyping(content);
    return (
        <>
            {text}
            <span className={`${isEnd ? 'hidden' : 'animate-typing'} `}>|</span>
        </>
    );
};

