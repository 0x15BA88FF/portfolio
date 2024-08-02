'use client';

import { useEffect, useRef, useState } from 'react';

export default function SkillTree() {
    const canvasRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const nodes = [
            { x: 0,              y: 0,        radius: 50,    color: "#15ba88",       label: "My Skills" },

            { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Fronend" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "HTML" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "CSS / SCSS" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Tailwind.css" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Next.js" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "React" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Vue.js" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "WASM" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Redux" },

            { x: 0,              y: 200,      radius: 50,    color: "#4BE1D0",      label: "Backend" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Node.js" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Express" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Django" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Firebase" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "MongoDB" },

            { x: -200,           y: 0,        radius: 50,    color: "#69E14B",    label: "Mobile" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "React Native" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Flutter" },

            { x: 200,            y: 0,        radius: 50,    color: "#E1624B",    label: "Desktop / CLI" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Electron" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Rust" },

            { x: 200,            y: 0,        radius: 50,    color: "#E1624B",    label: "Languages" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "C" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "C++" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Python" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Javascript" },
                { x: 0,              y: -200,     radius: 50,    color: "#8A4BE1",     label: "Typescript" },
        ];

        const edges = [
            { from: 0, to: 1 },
        ];

        function drawNode(node) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(node.label, node.x, node.y);
        }

        function drawEdge(edge) {
            const fromNode = nodes[edge.from];
            const toNode = nodes[edge.to];
            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
        }

        function drawSkillTree() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(offset.x, offset.y);
            ctx.scale(scale, scale);
            edges.forEach(drawEdge);
            nodes.forEach(drawNode);
            ctx.restore();
        }

        drawSkillTree();

        const handleWheel = (event) => {
            event.preventDefault();
            const scaleAmount = event.deltaY > 0 ? 0.9 : 1.1;
            setScale(prevScale => Math.max(0.1, Math.min(5, prevScale * scaleAmount)));
        };

        const handleMouseDown = (event) => {
            setDragging(true);
            setDragStart({ x: event.clientX - offset.x, y: event.clientY - offset.y });
        };

        const handleMouseMove = (event) => {
            if (dragging) {
                setOffset({ x: event.clientX - dragStart.x, y: event.clientY - dragStart.y });
            }
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        canvas.addEventListener("wheel", handleWheel);
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);

        return () => {
            canvas.removeEventListener("wheel", handleWheel);
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseUp);
        };
    }, [scale, offset, dragging, dragStart]);

    return (
        <canvas ref={ canvasRef } className="w-full aspect-video border-2 border-primary-500 bg-primary-500/20 rounded-lg" id="skillTreeCanvas" ></canvas>
    );
}
