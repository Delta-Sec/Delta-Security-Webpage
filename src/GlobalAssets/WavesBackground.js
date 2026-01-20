import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function WavesBackground({ children }) {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      
      <ShaderGradientCanvas 
        style={{ position: 'absolute', top: 0, pointerEvents: 'none' }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={0.3}
          cAzimuthAngle={170}
          cDistance={5.09}
          cPolarAngle={70}
          cameraZoom={1}
          color1="#000000"
          color2="#000000"
          color3="#980017"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          fov={50}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          reflection={0.1}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.2}
          uFrequency={0}
          uSpeed={0.12}
          uStrength={3.4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}