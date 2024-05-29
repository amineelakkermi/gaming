import React from 'react'
import styles, { layout } from '../../style'
import { time1, time2 } from '../../assets'

const Time = () => {
  return (
    <section id='support' className={`${layout.sectionRow} gap-[3rem] ${styles.paddingX} bg-black`}>
    
    <div className={`sm:px-4 px-6 sm:py-8 py-4 flex md:flex-row flex-col gap-[2rem] md:items-center items-start bg-beige rounded-[20px]`}>
     <img src={time1} alt="time1" className='md:w-[150px] w-[80px] md:h-[150px] h-[80px]' />
     <div className='flex flex-col gap-5'>
      <h3 className='font-bold text-[22px]'>24/7 Gamer Support</h3>
      <p className={`${styles.paragraph} text-black max-w-[850px]`}>
      Get assistance anytime with our 24/7 support and feel secure with our comprehensive trading protection!      
       </p>
      <button className={`bg-yellow ${styles.buttonStyle} w-[170px] h-[45px] mt-3`}>
      <a href="#" className='text-black font-semibold'>Learn More</a>
      </button>
     </div>
    </div>
    <div className={`sm:px-4 px-6 sm:py-8 py-4 flex md:flex-row flex-col gap-[2rem] md:items-center items-start bg-green rounded-[20px]`}>
     <img src={time2} alt="time2" className='md:w-[150px] w-[80px] md:h-[150px] h-[80px]'/>
     <div className='flex flex-col gap-5'>
      <h3 className='font-bold text-[22px]'>24 / 7 Live Support</h3>
      <p className={`${styles.paragraph} text-black`}>Our team is available around the clock. Contact us anytime for assistance!</p>
      
      <button className={`bg-yellow ${styles.buttonStyle} w-[170px] h-[45px] mt-3 `}>
      <a href="#" className='text-black font-semibold'>Chat Now</a>
      </button>
     </div>
    </div>
    
    </section>
  )
}

export default Time