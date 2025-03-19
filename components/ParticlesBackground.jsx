'use client';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#0a0a0a' } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: '#821cf9' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: { default: 'bounce' },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
