'use client'

import {useAnimations, useGLTF, Preload, OrbitControls} from "@react-three/drei";
import {Suspense, useEffect, useRef} from "react";
import { Group } from "three";
import {Canvas} from "@react-three/fiber";
import {CanvasLoader} from "@/app/components";

const Robot = () => {
    const group = useRef<Group>(null);
    const {nodes, materials, animations, scene} = useGLTF("./models/robot_playground.glb");
    const {actions} = useAnimations(animations, scene);

    useEffect(() => {
        const action = actions["Experiment"];
        if (action) {
            action.play();
        }
    }, [actions]);

    return (
        <group ref={group}>
            <primitive
                object={scene}
                scale={1.7}
                position-y={-2}
                rotation-y={0}
            />
        </group>
    );

};

const RobotCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="always"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Robot />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default RobotCanvas;


