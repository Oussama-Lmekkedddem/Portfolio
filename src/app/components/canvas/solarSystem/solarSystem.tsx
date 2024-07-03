'use client'

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "@/app/components";

const SolarSystem = () => {
    const solarsystem = useGLTF("./models/solarSystem/scene.gltf");

    return (
        <primitive
            object={solarsystem.scene}
            scale={0.4}
            position-y={0}
            rotation-y={0} />
    );
};

const SolarSystemCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 60,
                near: 0.1,
                far: 200,
                position: [0, 5, 20],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.0}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={0}
                    minDistance={25}
                    maxDistance={35}
                />
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                />
                <pointLight
                    position={[5, 5, 5]}
                    intensity={1.5}
                />

                <SolarSystem />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default SolarSystemCanvas;
