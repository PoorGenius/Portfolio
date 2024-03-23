import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");
    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            rotation-y={0}
            rotation-x={0} />
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 37,
                position: [-4, 3, 6],
            }}
            className="z-[999]">
            {/* set environment to studio */}
            <Environment preset="lobby" />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas