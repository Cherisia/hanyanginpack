import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver로 .reveal 요소에 .visible 클래스를 추가하는 훅
 * 반환된 ref를 섹션 최상위 요소에 붙이면 자동으로 하위 .reveal 요소를 관찰합니다.
 */
export function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const section = ref.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        observer.unobserve(e.target);
                    }
                }),
            { threshold: 0.05 }
        );

        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return ref;
}
