import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function BoxAnimation() {
  //   const Cube = ({
  //     position,
  //     size,
  //     color
  //   }: {
  //     position: [number, number, number]
  //     size: [number, number, number]
  //     color: string
  //   }) => {
  //     const ref = useRef<any>()
  //     useFrame((state, delta) => {
  //       if (ref.current) {
  //         ref.current.rotation.x += delta
  //         ref.current.rotation.y += delta * 2.0
  //         ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  //       }
  //     })
  //     return (
  //       <mesh position={position} ref={ref}>
  //         <boxGeometry args={size} />
  //         <meshStandardMaterial color={color} />
  //       </mesh>
  //     )
  //   }
  const Sphere = ({
    position,
    size,
    color
  }: {
    position: [number, number, number]
    size: [number, number, number]
    color: string
  }) => {
    const ref = useRef<any>()
    const [isHovered, setIsHovered] = useState(false)
    const [isClick, setIsClick] = useState(false)
    useFrame((state, delta) => {
      const speed = isHovered ? 1 : 0.2
      if (ref.current) {
        ref.current.rotation.y += delta * speed
      }
    })
    return (
      <mesh
        position={position}
        ref={ref}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsClick(!isClick)}
        scale={isClick ? 1.5 : 1}
      >
        <sphereGeometry args={size} />
        <meshStandardMaterial color={isHovered ? 'orange' : 'white'} wireframe />
      </mesh>
    )
  }
  //   const TorusKnot = ({
  //     position,
  //     size,
  //     color
  //   }: {
  //     position: [number, number, number]
  //     size: [number, number, number, number]
  //     color: string
  //   }) => {
  //     return (
  //       <mesh position={position}>
  //         <torusKnotGeometry args={size} />
  //         <meshStandardMaterial color={color} />
  //       </mesh>
  //     )
  //   }
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.2} />

      {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={'green'} />  */}
      {/* <TorusKnot position={[-2, 0, 0]} size={[0.5, 0.1, 1000, 50]} color={'hotpink'} /> */}
      <Sphere position={[0, 0, 0]} size={[1, 20, 20]} color={'orange'} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default BoxAnimation
