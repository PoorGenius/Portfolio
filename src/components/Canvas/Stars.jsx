import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"

import Loader from "../Loader";

import * as random from "maath/random/dist/maath-random.esm"

const Stars = (props) => {
    const ref = useRef();

    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5001), { radius: 1.2 }));


    useFrame((state, delta) => {
        // print only if delta isnan
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className="w-full absolute h-full inset-0">
            <Canvas camera={{ position: [0, 0, 1] }} style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={<Loader />}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}


export default StarsCanvas