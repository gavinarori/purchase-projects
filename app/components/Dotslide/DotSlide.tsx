import React from 'react'
import Image from "next/image"
import Link from "next/link"

const DotSlide = () => {
  return (
    
    

   <div className="grid grid-cols-fluid gap-12">
    <Image
        src='/frontend_6f5f5d3947.png'
        alt='new'
        width={800}
        height={800}
        className="w-full h-96 object-cover rounded-lg"
        priority={true}
      />
      

      <Image
        src='/frontend_6f5f5d3947.png'
        alt='new'
        width={800}
        height={800}
        className="w-full h-96 object-cover rounded-lg"
      />
    </div>
  
  

  
  )
}

export default DotSlide