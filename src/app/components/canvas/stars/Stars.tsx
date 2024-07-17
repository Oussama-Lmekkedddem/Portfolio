'use client';
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { BufferGeometry, Points as ThreePoints, Material } from "three";

// Use 'any' type to bypass the TypeScript error
const inSphere: any = require('maath/random/dist/maath-random.esm').inSphere;

interface StarsProps {
    frustumCulled?: boolean;
}

const Stars: React.FC<StarsProps> = (props) => {
    const ref = useRef<ThreePoints<BufferGeometry, Material>>(null!);
    const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={props.frustumCulled}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas: React.FC = () => {
    return (
        <div className='absolute w-full h-full inset-0 bg-black'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
