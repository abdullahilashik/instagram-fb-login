import React from 'react'
import phoneContainer from '../assets/images/home-phones-2x.png';
import screenshot from '../assets/images/screenshot1-2x.png';
import person from '../assets/images/person.jpg';

const SocialLogin = () => {
  return (
    <div className='flex items-center gap-4'>
        {/* image container */}
        <div className='h-[635px] w-[465px] bg-cover relative' style={{backgroundImage: `url(${phoneContainer})`}}>
            <img src={screenshot} alt="" className='w-[250px] right-[3.7rem] bottom-[4.1rem] absolute'/>
        </div>
        {/* user card */}
        <div className="p-12 shadow border rounded">
            <div className="flex flex-col justify-between items-center space-y-4">
                <h1 className='font-pacifico text-4xl pb-4'>Instagram</h1>
                <img src={person} alt=""  className='w-24 h-24 rounded-full'/>
                <button className="px-5 py-1 text-sm rounded bg-blue-500 hover:bg-blue-600 duration-300 text-white font-semibold">Continue as _ashik_arefin_ ?</button>
                <p className='text-sm flex gap-2'>
                    <span>Not _ashik_arefin_ ?</span>
                    <span className='font-semibold'>Switch Accounts</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SocialLogin