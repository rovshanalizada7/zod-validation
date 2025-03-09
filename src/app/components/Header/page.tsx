import React from 'react'

export const Header = () => {
  return (
    <div className='w-full  bg-black h-[80px] text-[white] flex justify-around items-center'>
        <div className="logo text-[30px]">Logo</div>
        <ul className='flex w-[30%] justify-between'>
            <li><a className='text-[18px]' href="/">Home</a></li>
            <li><a className='text-[18px]' href="">About</a></li>
            <li><a className='text-[18px]' href="">Products</a></li>
            <li><a className='text-[18px] hover:text-[red]' href="/pages/auth/login">Login</a></li>
            <li><a className='text-[18px]' href="">Career</a></li>
        </ul>
    </div>
  )
}

