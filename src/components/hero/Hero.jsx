import React from 'react'
import './hero.css'
import styles, { layout } from '../../style'

const Hero = () => {
  return (
    <section id='home' className={`hero-section ${layout.sectionColumn} justify-center items-center text-center`} >
      <div className='gap-[1rem]'>
      <h1 className={`${styles.heading2} text-white`}>Explore A Word Of Mythical Creatures</h1>
      <p className={`${styles.paragraph}`}>Unleash Your Gaming Destiny Embark on Epic Adventures Toda</p>
      <button className={`bg-yellow ${styles.buttonStyle} w-[170px] h-[45px] mt-10`}><a href="#" className='text-white'>Get Access</a></button>
      </div>
    </section>
  )
}

export default Hero