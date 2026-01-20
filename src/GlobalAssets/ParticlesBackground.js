import React, { useMemo } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = ({ count = 50, color = "var(--primary-color)" }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        id: i,
        size: Math.random() * 3 + 1 + "px",
        left: Math.random() * 100 + "vw",
        duration: Math.random() * 10 + 5 + "s",
        delay: Math.random() * 10 + "s",
      });
    }
    return temp;
  }, [count]);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            backgroundColor: color,
            boxShadow: `0 0 5px ${color}`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;