import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vh] rounded-full">Loading...</div>
        </div>
    </html>
  )
}

export default Loader