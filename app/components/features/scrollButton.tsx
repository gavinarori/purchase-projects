import React, { useEffect, useState } from 'react'




const scrollButton = () => {
    const [Top, setScrollUp] = useState(false)
   
    useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setScrollUp(true)
      }else{
        setScrollUp(false)
      }})
   },[])
}

   const scrollToWhere = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  return ( <div className=''>
    
        { Top && ( <div> <button onClick={scrollToWhere} className='fixed bottom-[50px] right-[50px] h-6 w-6 text-white'>@</button></div>
           

        )}
    </div>
  )
}

export default scrollButton;