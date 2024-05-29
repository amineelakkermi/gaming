import React from 'react'
import styles, { layout } from '../../style'
import { callOfDuty, clans, fortnite, gold, gta5, league, rainboy, roblox, school, stars, valorant } from '../../assets'

const Description = () => {
  return (
    <section id='collection' className={`flex justify-center items-center bg-black  ${styles.padding} px-[200px] flex-col md:gap-[2rem] gap-[4rem]`}>
     
     <div className={`flex md:flex-row flex-col md:gap-[5rem] gap-[2rem]`}>
      
      <div className='container bg-grey rounded-[20px] p-[1.5rem]  md:w-[700px] w-[100%]'>
       <h4 className='text-white font-semibold text-[22px]'>Poppular Accounts</h4>
       
       <div className='flex md:flex-row flex-col  justify-between gap-[2rem] mt-[1.7rem]'>
      
       <ul className='flex flex-col gap-[1rem]'>
       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={gta5} alt="gta5" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Grand Theft Auto</a></li>
       </div>

       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={valorant} alt="valorant" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Valorant</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={rainboy} alt="rainboy" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Rainboy Six Siege</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={league} alt="league" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Leaugue of Legends</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={clans} alt="clans" className='w-[48px] h-[48px]'/>
        <li><a href="#" className='text-white font-medium'>Clash of clans</a></li>
        </div>

       </ul>

       <ul className='md:flex hidden flex-col gap-[1rem]'>
       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={fortnite} alt="fortnite" className='w-[48px] h-[48px]'/>
        <li><a href="#" className='text-white font-medium'>Fortinite</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={callOfDuty} alt="call-of-duty" className='w-[48px] h-[48px]'/>
        <li><a href="#" className='text-white font-medium'>Call of duty</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={school} alt="school" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Old school run scape</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={roblox} alt="roblox" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Roblox</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={stars} alt="stars" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Browl stars</a></li>
        </div>

       </ul>
       
       </div>

      </div>

      <div className='container bg-grey rounded-[20px] p-[1.5rem] md:w-[450px] w-[100%]'>
      <h4 className='text-white font-semibold text-[22px]'>Popular Currencies</h4>
      
      <div className='flex xs:flex-row flex-col  justify-between gap-[2rem] mt-[1.7rem]'>
       
       <ul className='flex flex-col gap-[1rem]'>
       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={school} alt="school" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Old school run scape</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={roblox} alt="roblox" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Roblox</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={fortnite} alt="fortnite" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Fortinite</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={clans} alt="clans" className='w-[48px] h-[48px]'/>
        <li><a href="#" className='text-white font-medium'>Clash of clans</a></li>
        </div>


        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={gta5} alt="gta5" className='w-[48px] h-[48px]'/>
        <li><a href="#" className='text-white font-medium'>Grand Theft Auto</a></li>
        </div>


       </ul>
       
       </div>

      </div>

     </div>

     <div className={`flex md:flex-row flex-col md:gap-[5rem] gap-[2rem] md:mb-5 mb-10`}>
   
     <div className='container bg-grey rounded-[20px] p-[1.5rem] md:w-[700px] w-[100%]'>
     <h4 className='text-white font-semibold text-[20px]'>Populart Items</h4>
       
       <div className='flex sm:flex-row flex-col justify-between gap-[3rem] mt-[1.7rem]'>
       
       <ul className='flex flex-col gap-[1rem]'>
       
       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={valorant} alt="valorant" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Valorant</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={rainboy} alt="rainboy" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Rainboy Six Siege</a></li>
        </div>
       </ul>

       

       </div>

      </div>

      <div className='container bg-grey rounded-[20px] p-[1.5rem] md:w-[450px] w-[100%]'>
      <h4 className='text-white font-semibold text-[20px]'>Poppular Accounts</h4>
       
       <div className='flex gap-[2rem] mt-[1.7rem]'>
       
       <ul className='flex flex-col gap-[1rem]'>
      
       <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={gold} alt="gold" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Lost Ark Gold</a></li>
        </div>

        <div className='flex px-[16px] py-[8px] items-center gap-[1.2rem] hover:bg-[#444] transition-[0.4s] w-[300px] rounded-[5px] '>
        <img src={roblox} alt="roblox" className='w-[48px] h-[48px]' />
        <li><a href="#" className='text-white font-medium'>Roblox</a></li>
        </div>
       
       
       
       </ul>

       
       </div>

      </div>

     </div>

    </section>
  )
}

export default Description