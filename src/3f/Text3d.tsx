import { OrbitControls, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import  { useRef } from 'react'

function Text3d() {
  function RotationText() {
    const textRef = useRef<any>()
    useFrame(() => {
      if (textRef.current) {
        textRef.current.rotation.y += 0.01
      }
    })

    return (
      <Text
        ref={textRef}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        scale={1.5}
        color={'white'}
        anchorX={'center'}
        font="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      >
        v:dev
      </Text>
    )
  }
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <spotLight position={[2, 2, 2]} />
      <RotationText />
    </Canvas>
  )
}

export default Text3d
