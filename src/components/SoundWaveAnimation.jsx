import React, { useEffect, useRef } from 'react';

const SoundWaveAnimation = ({ isPlaying = false }) => {
  const canvasRef = useRef(null);
  const currentAmplitudeRef = useRef(0.3); // Track current amplitude for smooth transition

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

    // Base wave configuration - stays constant
    const waves = [
      { color: 'rgba(96, 165, 250, 0.5)', baseSpeed: 0.01, baseAmplitude: 50, frequency: 0.01 },
      { color: 'rgba(192, 132, 252, 0.5)', baseSpeed: 0.015, baseAmplitude: 40, frequency: 0.015 },
      { color: 'rgba(147, 197, 253, 0.3)', baseSpeed: 0.012, baseAmplitude: 30, frequency: 0.012 },
      { color: 'rgba(255, 255, 255, 0.1)', baseSpeed: 0.02, baseAmplitude: 20, frequency: 0.018 }
    ];

    // Lerp function for smooth transitions
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.5;

      // Target amplitude multiplier based on playing state
      const targetAmplitude = isPlaying ? 1.0 : 0.3;
      
      // Smoothly transition current amplitude (0.02 = transition speed, lower = slower)
      currentAmplitudeRef.current = lerp(currentAmplitudeRef.current, targetAmplitude, 0.02);

      const centerY = canvas.height / 2;
      const amplitudeMultiplier = currentAmplitudeRef.current;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        // Speed also scales slightly with amplitude for natural feel
        const currentSpeed = wave.baseSpeed * (0.7 + amplitudeMultiplier * 0.6);
        const currentAmplitude = wave.baseAmplitude * amplitudeMultiplier;

        for (let x = 0; x < canvas.width; x++) {
          // Clean, harmonious wave equation
          const y = centerY + 
            Math.sin(x * wave.frequency + time * currentSpeed) * currentAmplitude +
            Math.sin(x * wave.frequency * 0.5 + time * currentSpeed * 0.8) * (currentAmplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Background Gradient - UNCHANGED */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
      
      {/* Grid Overlay - UNCHANGED */}
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
      
      {/* Central Glow - UNCHANGED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] animate-pulse"></div>
    </div>
  );
};

export default SoundWaveAnimation;