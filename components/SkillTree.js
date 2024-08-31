import { useEffect, useRef, useState } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';

export default function SkillTree() {
    const canvasRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [fullscreen, setFullscreen] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const nodes = [
            { x: centerX, y: centerY, radius: 50, color: "#15ba88", label: "My Skills", children: [
                { radius: 50, color: "#D13CF6", label: "Frontend", children: [
                    { radius: 50, label: "HTML", children: []},
                    { radius: 50, label: "CSS / SCSS / SASS", children: []},
                    { radius: 50, label: "Tailwind.css", children: []},
                    { radius: 50, label: "React.js", children: []},
                    { radius: 50, label: "Vue.js", children: []},
                    { radius: 50, label: "Svelte.js", children: []},
                ]},
                { radius: 50, color: "#F63C3C", label: "Backend", children: [
                    { radius: 50, color: "#F6933C", label: "Runtimes / Servers", children: [
                        { radius: 50, label: "Node.js", children: []},
                        { radius: 50, label: "Express.js", children: []},
                        { radius: 50, label: "Django", children: []},
                        { radius: 50, label: "Flask", children: []},
                    ]},
                    { radius: 50, color: "#F6DA3C", label: "Databases", children: [
                        { radius: 50, label: "MongoDB", children: []},
                        { radius: 50, label: "MongoDB", children: []},
                    ]},
                    { radius: 50, color: "#B5F63C", label: "Services", children: [
                        { radius: 50, label: "Firebase", children: []},
                        { radius: 50, label: "AWS", children: []},
                        { radius: 50, label: "Vercel", children: []},
                    ]},
                ]},
                { radius: 50, color: "#3CE4F6", label: "Mobile", children: [
                    { radius: 50, label: "React Native", children: []},
                    { radius: 50, label: "Flutters", children: []},
                ]},
                { radius: 50, color: "#3C61F6", label: "Desktop / CLI", children: [
                    { radius: 50, label: "Electron", children: []},
                    { radius: 50, label: "Qt", children: []},
                    { radius: 50, label: "GTK", children: []},
                    { radius: 50, label: "Charmbracelet", children: []},
                ]},
                { radius: 50, color: "#F63CAC", label: "Languages", children: [
                    { radius: 50, label: "Python", children: []},
                    { radius: 50, label: "Javascript", children: []},
                    { radius: 50, label: "Typescript", children: []},
                    { radius: 50, label: "C", children: []},
                    { radius: 50, label: "C++", children: []},
                    { radius: 50, label: "C#", children: []},
                    { radius: 50, label: "Rust", children: []},
                    { radius: 50, label: "Go", children: []},
                ]},
                { radius: 50, color: "#454545", label: "Tools", children: [
                    { radius: 50, label: "Git", children: []},
                    { radius: 50, label: "Docker", children: []},
                    { radius: 50, label: "Linux", children: []},
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
            const baseDistance = 1000;
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
        <div className={ fullscreen && "fixed top-0 left-0 w-screen h-screen bg-background-base" || "p-2 border-2 border-primary rounded-lg" }>
            <div className="abolute z-20 flex gap-2">
                <button onClick={ _ => setFullscreen(!fullscreen) } className="w-max h-max p-4 bg-background-overlay/50 hover:bg-background-overlay/80 rounded-lg">{ fullscreen && <AiOutlineFullscreenExit /> || <AiOutlineFullscreen /> }</button>
                <button onClick={ _ => handleZoom(0.3) } className="w-max h-max p-4 bg-background-overlay/50 hover:bg-background-overlay/80 rounded-lg"><AiOutlineZoomIn /></button>
                <button onClick={ _ => handleZoom(-0.3) } className="w-max h-max p-4 bg-background-overlay/50 hover:bg-background-overlay/80 rounded-lg"><AiOutlineZoomOut /></button>
            </div>
            <canvas ref={ canvasRef } className="w-full" id="skillTreeCanvas"></canvas>
        </div>
    );
}
