import React from 'react'
import styles, { layout } from '../../style'
import { card } from '../../assets'

const Trading = () => {
  return (
    <section id='explore' className={`${layout.sectionRow} bg-blue ${styles.paddingX}`}>
     <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[450px] h-[450px]' />
     </div>
     <div className={layout.sectionInfo}>
     <h2 className={`${styles.heading2} text-black`} >Explore Our Game Library</h2>
     <p className={`${styles.paragraph} mt-3 text-black font-medium`}>
     Discover a world of gaming in our store! Browse through an extensive collection of the latest titles and timeless classics.
    Whether you're into epic adventures, strategic battles,
    or immersive storytelling, we have the perfect game for you. Start your gaming journey today!
     </p>
     <button className={`bg-yellow ${styles.buttonStyle} w-[170px] h-[45px] mt-10`}>
     <a href="#" className='text-black font-semibold'>Start Trading</a>
     </button>

     </div>
    </section>
  )
}

export default Trading