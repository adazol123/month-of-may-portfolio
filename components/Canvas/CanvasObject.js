import { Suspense, useMemo, useRef, useState } from "react"
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import styles from '../../styles/Canvas.module.css'
import { OrbitControls, Stars } from '@react-three/drei'

let mouseY = 0
let mouseX = 0

function animateTerrain(event){
    mouseY = event.clientY
    mouseX = event.clientX
}


function Points(props) {


    const { size } = useThree()
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(({ mouse }) => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.00004
        mesh.current.position.z =  -(mouse.x * 0.004)
        mesh.current.rotation.y +=  -(mouse.y * 0.006) 
        mesh.current.rotation.z =  (mouse.y * 0.005) + mesh.current.rotation.y
      })
    return (
        <points {...props} ref={mesh} 
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(!hovered)}
            // onPointerOut={(e) => setHover(false)}
            position={[0.6,0,0]}
            
        >
            <sphereGeometry attach='geometry' args={[1, 32, 50]} />
            <pointsMaterial size={0.005}
                attach='material'
                color={'#108020'}
                opacity={0.6}
                // color= { hovered ? 'yellow' : '#108020'}
                blending= {THREE.AdditiveBlending}   

            />
        </points>
    )
}

function AnimationCanvas() {
    return (
        <Canvas
            resize
            camera={{position: [0, 0, 2.4], fov: 70, near: 0.0001, far: 500}}
        >
            {/* <OrbitControls/> */}
            <Points />
        </Canvas>
    )
}



export const CanvasObject = (params) => {

    return( 
        <div className={styles.canvas_container}>
            <div className={styles.scene}>
                    <AnimationCanvas/>
            </div>
        </div>
    )
}
