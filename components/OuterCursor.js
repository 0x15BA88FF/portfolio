import { useEffect, useRef } from 'react';

export default function OuterCursor() {
    const blobRef = useRef();
    const cursorRef = useRef();

    useEffect(() => {
        window.onpointermove = event => {
            const { clientX, clientY } = event;

            cursorRef.current.animate(
                { left: `${ clientX - 11 }px`, top: `${ clientY - 11 }px` },
                { duration: 500, fill: "forwards",  }
            );

            blobRef.current.animate(
                { left: `${ clientX - 11 }px`, top: `${ clientY - 11 }px` },
                { duration: 5000, fill: "forwards",  }
            );
        }
    }, []);

    return (
        <>
            <div ref={ cursorRef } className="fixed z-50 w-[36px] h-[36px] outer-cursor pointer-events-none" />
            <div ref={ blobRef } id="cursor-blob"></div>
        </>
    );
};
