import React, { useEffect, useRef } from 'react';

const SoundWaveAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Configuration for the waves
    const waves = [
      { color: 'rgba(96, 165, 250, 0.5)', speed: 0.01, amplitude: 50, frequency: 0.01 }, // Blue
      { color: 'rgba(192, 132, 252, 0.5)', speed: 0.02, amplitude: 40, frequency: 0.02 }, // Purple
      { color: 'rgba(147, 197, 253, 0.3)', speed: 0.015, amplitude: 30, frequency: 0.015 }, // Light Blue
      { color: 'rgba(255, 255, 255, 0.1)', speed: 0.03, amplitude: 20, frequency: 0.03 }  // White
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.5;

      const centerY = canvas.height / 2;

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x++) {
          // Complex wave equation for organic "voice" look
          // Combines multiple sine waves with varying frequencies and offsets
          const y = centerY + 
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude * Math.sin(time * 0.01) +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude / 2);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        
        // Add a fill gradient for a more "filled" look optionally
        // ctx.lineTo(canvas.width, canvas.height);
        // ctx.lineTo(0, canvas.height);
        // ctx.fillStyle = wave.color.replace('0.5', '0.1');
        // ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <canvas 
        ref={canvasRef} 
        className="relative z-10 w-full h-full filter blur-[1px]"
      />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] animate-pulse"></div>
    </div>
  );
};

export default SoundWaveAnimation;
