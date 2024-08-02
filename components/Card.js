'use client';

import { useRef } from 'react';

export default function Card(props) {
    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const rotateX = -y / 10;
        const rotateY = x / 10;

        cardRef.current.style.transform = `rotateX(${ rotateX }deg) rotateY(${ rotateY }deg)`;
    };

    const handleMouseLeave = () => cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";

    return (
        <div className={ `card ${ props.className }` } ref={ cardRef } onMouseMove={ handleMouseMove } onMouseLeave={ handleMouseLeave }>{ props.children }</div>
    );
};
