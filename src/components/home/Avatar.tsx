import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
const Avatar = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      borderRadius: [
        '60% 40% 30% 70%/60% 30% 70% 40%',
        '30% 60% 70% 40%/50% 60% 30% 60%',
        '60% 40% 30% 70%/60% 30% 70% 40%'
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'mirror'
      }
    })
  }, [controls])

  return (
    <motion.div
      animate={controls}
      className='relative overflow-hidden shadow-box_shadow_1 w-96 h-96'
      whileHover={{ scale: 1.1 }}
      style={{
        backgroundImage: "url('src/assets/images/IMG_5823.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  )
}

export default Avatar
