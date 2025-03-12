"use client";
import React from 'react'

const Register = () => {
  return (
    <section className='w-full flex items-center justify-center '>
    <div className='p-3 flex flex-col items-center bg-[lightgray] w-[500px] rounded-2xl'>
    <h1 className='text-[28px]'>Register Page</h1>
    <form className='  h-[300px] w-[500px] flex flex-col justify-center items-center gap-5' action="">
      <input type="text" placeholder='Email...' className='outline-none p-2 rounded border border-[gray]  w-[70%]' />
      <input type="text" placeholder='Password...' className=' outline-none p-2 border border-[gray] rounded w-[70%]' />
      <button className='p-3 bg-[green] hover:bg-emerald-600 w-[100px] rounded text-[white] cursor-pointer'>Sign Up</button>
    </form>
    <span>Already have an account? <a className='text-[red] text-[18px] font-[700] underline' href="/pages/auth/login">Sign In</a></span>
  </div>
  </section>
  )
}

export default Register