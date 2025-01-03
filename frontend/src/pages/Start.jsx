import React from 'react'
import {Link} from 'react-router-dom';
const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
            <Link to='/login' className='flex item-center justify-center w-full bg-black text-white rounded-lg mt-5 py-3'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
