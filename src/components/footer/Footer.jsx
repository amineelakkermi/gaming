import React from 'react'
import styles from '../../style'

const Footer = () => {
  return (
    <div className={`flex md:flex-row flex-col bg-grey ${styles.padding} md:justify-between justify-center md:items-start items-center`}>
      <div className='flex flex-col gap-[1rem] md:justify-between justify-center md:items-start items-center md:text-start text-center mb-5'>
      <div className='logo'>
      <h2 className='font-bold text-[32px] text-white'>Eldorado</h2>
      </div>
      <p className={`${styles.paragraph} font-semibold md:max-w-[420px] max-w-[100%]`}>
      Join us today to level up your gaming experience!
      </p>
      </div>

      <div className='md:my-0 my-5'>
      <ul className='flex flex-col gap-[1rem] md:text-start text-center'>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Help Center</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Contact Us</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Bug Bounty</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Articles</a>
      </li>
      </ul>
      </div>

      <div className='md:my-0 my-5'>
      <ul className='flex flex-col gap-[1rem]  md:text-start text-center'>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Account Warranty</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>TradeShild(Buying)</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>TradeShild(Selling)</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Desposits</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Withdrawals</a>
      </li>
      </ul>
      </div>

      <div className='md:my-0 my-5'>
      <ul className='flex flex-col gap-[1rem] md:text-start text-center'>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Account Seller Rules</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Seller Rules</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Changing Username</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Feels</a>
      </li>
      <li>
        <a href="#" className={`${styles.paragraph} font-semibold hover:text-yellow transition-[0.4s]`}>Refound Policy</a>
      </li>
      </ul>
      </div>
    </div>
  )
}

export default Footer