import { useEffect, useRef, useState } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';

export default function SkillTree() {
    const canvasRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const nodes = [
            { x: centerX, y: centerY, radius: 100, color: "#15ba88", label: "My Skills", children: [
                { radius: 100, color: "#74c7ec", label: "Frontend", children: [
                    { radius: 100, label: "HTML", children: []},
                    { radius: 100, label: "CSS", children: []},
                    { radius: 100, label: "Tailwind.css", children: []},
                    { radius: 100, label: "React.js", children: []},
                    { radius: 100, label: "Vue.js", children: []},
                    { radius: 100, label: "Svelte.js", children: []},
                ]},
                { radius: 100, color: "#f38ba8", label: "Backend", children: [
                    { radius: 100, color: "#fab387", label: "Servers", children: [
                        { radius: 100, label: "Node.js", children: []},
                        { radius: 100, label: "Express.js", children: []},
                        { radius: 100, label: "Django", children: []},
                        { radius: 100, label: "Flask", children: []},
                    ]},
                    { radius: 100, color: "#eba0ac", label: "Databases", children: [
                        { radius: 100, label: "MongoDB", children: []},
                        { radius: 100, label: "PostgreSQL", children: []},
                        { radius: 100, label: "SQLite", children: []},
                    ]},
                    { radius: 100, color: "#fab387", label: "Services", children: [
                        { radius: 100, label: "Firebase", children: []},
                        { radius: 100, label: "AWS", children: []},
                        { radius: 100, label: "Vercel", children: []},
                    ]},
                ]},
                { radius: 100, color: "#f9e2af", label: "Mobile", children: [
                    { radius: 100, label: "React Native", children: []},
                    { radius: 100, label: "Flutters", children: []},
                ]},
                { radius: 100, color: "#a6e3a1", label: "Desktop / CLI", children: [
                    { radius: 100, label: "Electron", children: []},
                    { radius: 100, label: "Qt", children: []},
                    { radius: 100, label: "GTK", children: []},
                    { radius: 100, label: "Charm", children: []},
                ]},
                { radius: 100, color: "#89b4fa", label: "Languages", children: [
                    { radius: 100, label: "Python", children: []},
                    { radius: 100, label: "Javascript", children: []},
                    { radius: 100, label: "Typescript", children: []},
                    { radius: 100, label: "C", children: []},
                    { radius: 100, label: "C++", children: []},
                    { radius: 100, label: "C#", children: []},
                    { radius: 100, label: "Rust", children: []},
                    { radius: 100, label: "Go", children: []},
                ]},
                { radius: 100, color: "#313244", label: "Tools", children: [
                    { radius: 100, label: "Git", children: []},
                    { radius: 100, label: "Docker", children: []},
                    { radius: 100, label: "Linux", children: []},
                ]},
            ]}
        ];

        const drawNode = node => {
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
            ctx.font = "bold 28px sans serif";
            ctx.fillText(node.label, node.x, node.y);
        }

        const drawEdge = (parent, child) => {
            const angle = Math.atan2(child.y - parent.y, child.x - parent.x);
            const startX = parent.x + Math.cos(angle) * parent.radius;
            const startY = parent.y + Math.sin(angle) * parent.radius;
            const endX = child.x - Math.cos(angle) * child.radius;
            const endY = child.y - Math.sin(angle) * child.radius;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
        }

        const positionChildren = (parent, depth=1) => {
            const baseDistance = 1500;
            const angleIncrement = (2 * Math.PI) / parent.children.length;

            parent.children.forEach((child, index) => {
                const angle = index * angleIncrement;
                const distance = baseDistance / depth;

                child.x = parent.x + Math.cos(angle) * distance;
                child.y = parent.y + Math.sin(angle) * distance;
                child.color = child.color || parent.color;

                drawEdge(parent, child);
                drawNode(child);

                if (child.children) positionChildren(child, depth + 1);
            });
        }

        const drawSkillTree = _ => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(offset.x, offset.y);
            ctx.scale(scale, scale);
            nodes.forEach(node => {
                drawNode(node);
                if (node.children) positionChildren(node);
            });
            ctx.restore();
        }

        drawSkillTree();

        const handleWheel = event => {
            event.preventDefault();
            const scaleAmount = event.deltaY > 0 ? 0.9 : 1.1;
            setScale(prevScale => Math.max(0.1, Math.min(5, prevScale * scaleAmount)));
        };

        const handleMouseDown = event => {
            setDragging(true);
            setDragStart({ x: event.clientX - offset.x, y: event.clientY - offset.y });
        };

        const handleMouseMove = event => dragging && setOffset({ x: event.clientX - dragStart.x, y: event.clientY - dragStart.y });
        const handleMouseUp = _ => { setDragging(false); };

        const handleClick = event => {
            const clickX = (event.clientX - offset.x) / scale;
            const clickY = (event.clientY - offset.y) / scale;

            nodes.forEach(node => {
                if (isNodeClicked(node, clickX, clickY)) zoomToNode(node);
                node.children?.forEach(child => isNodeClicked(child, clickX, clickY) && zoomToNode(child));
            });
        }

        const isNodeClicked = (node, x, y) => {
            const dx = x - node.x;
            const dy = y - node.y;
            return Math.sqrt(dx * dx + dy * dy) < node.radius;
        }

        const zoomToNode = node => {
            const newOffsetX = canvas.width / 2 - node.x * scale;
            const newOffsetY = canvas.height / 2 - node.y * scale;

            setOffset({ x: newOffsetX, y: newOffsetY });
            setScale(2);
        }

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("wheel", handleWheel);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);

        return _ => {
            canvas.removeEventListener("click", handleClick);
            canvas.removeEventListener("wheel", handleWheel);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseUp);
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [scale, offset, dragging, dragStart]);

    const handleZoom = scale => setScale(prevScale => Math.max(0.1, Math.min(5, prevScale + scale)));

    return (
        <div className={ fullscreen && "fixed top-0 left-0 w-screen h-screen bg-background-900" || "p-2 border-2 border-primary rounded-lg" }>
            <div className="abolute z-20 flex gap-2 p-2">
                <button onClick={ _ => setFullscreen(!fullscreen) } className="w-max h-max p-4 bg-background-950/50 hover:bg-background-overlay/80 rounded-lg">{ fullscreen && <AiOutlineFullscreenExit /> || <AiOutlineFullscreen /> }</button>
                <button onClick={ _ => handleZoom(0.2) } className="w-max h-max p-4 bg-background-950/50 hover:bg-background-overlay/80 rounded-lg"><AiOutlineZoomIn /></button>
                <button onClick={ _ => handleZoom(-0.2) } className="w-max h-max p-4 bg-background-950/50 hover:bg-background-overlay/80 rounded-lg"><AiOutlineZoomOut /></button>
            </div>
            <canvas ref={ canvasRef } className="w-full" id="skillTreeCanvas"></canvas>
        </div>
    );
}
