import React, { useEffect } from 'react';

const Bubbles: React.FC = () => {
  useEffect(() => {
    const bubbleCount = 30;
    const container = document.getElementById('bubble-container');

    if (container) {
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble absolute bottom-0';
        const size = Math.random() * 10 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.backgroundImage = 'url(/src/images/blue_bubble_transparent.png)';
        bubble.style.backgroundSize = 'cover';
        bubble.style.opacity = `${Math.random() * 0.5 + 0.5}`;
        bubble.style.animationDuration = `${Math.random() * 15 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(bubble);
      }
    }
  }, []);

  return <div id="bubble-container" className="fixed inset-0 z-0 pointer-events-none overflow-hidden"></div>;
};

export default Bubbles;
