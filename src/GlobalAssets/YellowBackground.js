import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const YellowBackground = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#000' }}>
      
      <ShaderGradientCanvas 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 0, 
          pointerEvents: 'none' 
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={0}
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
          cameraZoom={15.04}
          color1="#625d00"
          color2="#000000"
          color3="#dddb4d"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="env"
          pixelDensity={0.1}
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          range="enabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere" 
          uAmplitude={4.3}
          uDensity={7}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default YellowBackground;