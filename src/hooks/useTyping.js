import { useState, useEffect } from 'react';

// @param startTime : 이벤트 시작 타이밍
// @param content : 타이핑 될 글
// @returns text : 타이핑 되어가는 글자
// @returns isEnd : 타이핑이 끝났다는 신호

export default function useTyping(content) {
    const [text, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const typeEvent = setInterval(() => {
            setCharacterCount((prev) => prev + 1);
            setText((prev) => prev + content[characterCount]);
        }, 100);

        if (text.length > content.length - 1) {
            setIsEnd(true);
            clearInterval(typeEvent);
        }

        return () => clearInterval(typeEvent);
    }, [text, isEnd]);
    return { text, isEnd };
}
