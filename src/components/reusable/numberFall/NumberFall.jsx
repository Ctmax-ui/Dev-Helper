import { useEffect, useRef } from 'react';

const NumberFall = ({customStyle, dropsColor, dropSize, dropsBG, dropSpeed, mouseEnterDropSpeed}) => {
    const matrixRainRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        // Glitch effect
        const glitchText = document.getElementById('glitch-text');
        if (glitchText) {
            setInterval(() => {
                const glitchEffect = document.createElement('div');
                glitchEffect.classList.add('glitch-effect');
                glitchText.appendChild(glitchEffect);

                setTimeout(() => {
                    glitchEffect.remove();
                }, 50);
            }, 3000);
        }

        // Matrix rain effect
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const matrixRain = matrixRainRef.current;

        const resizeCanvas = () => {
            canvas.width = matrixRain.offsetWidth;
            canvas.height =  matrixRain.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()*&^%";
        const fontSize = dropSize || 15;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 0;
            
        }

        const drawMatrixRain = () => {
            ctx.fillStyle = dropsBG || "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = dropsColor || '#0F0';
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        let intervalId = setInterval(drawMatrixRain, dropSpeed || 35);

        const handleMouseEnter = () => {
            clearInterval(intervalId);
            ctx.fillStyle = "#0F0";
            intervalId = setInterval(drawMatrixRain, mouseEnterDropSpeed|| 15);
        };

        const handleMouseLeave = () => {
            clearInterval(intervalId);
            ctx.fillStyle = "#0F0";
            intervalId = setInterval(drawMatrixRain, dropSpeed || 35);
        };

        const handleClick = () => {
            ctx.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(1)}`;
        };

        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('click', handleClick);

        return () => {
            clearInterval(intervalId);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('click', handleClick);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [dropsColor, dropSize, dropsBG, dropSpeed]);

    return (
        <div className={`matrix-rain ${customStyle}`} id="matrix-rain" ref={matrixRainRef}>
            <canvas ref={canvasRef} className={`h-[100%]`}></canvas>
        </div>
    );
};

export default NumberFall;
