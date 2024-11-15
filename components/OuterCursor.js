import { useEffect, useRef } from 'react';

export default function OuterCursor() {
    const cursorRef = useRef();

    useEffect(() => {
        window.onpointermove = event => {
            const { clientX, clientY } = event;

            cursorRef.current.animate(
                { left: `${ clientX - 11 }px`, top: `${ clientY - 11 }px` },
                { duration: 100, fill: "forwards",  }
            );
        }
    }, []);

    return (
        <>
            <div ref={ cursorRef } className="fixed z-50 w-[36px] h-[36px] cursor-outer pointer-events-none" />
        </>
    );
};
