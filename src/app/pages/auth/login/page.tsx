
import React from 'react'

 const Login = () => {
  return (
    <section className='w-full flex items-center justify-center '>
      <div className='p-3 flex flex-col items-center bg-[lightblue] w-[500px] rounded-2xl'>
      <h1 className='text-[28px]'>Login Page</h1>
      <form className='  h-[300px] w-[500px] flex flex-col justify-center items-center gap-3' action="">
        <input type="text" placeholder='Email' className=' outline-none p-2 rounded  border border-[gray]   w-[70%]' />
        <input type="text" placeholder='Password' className=' outline-none p-2 border border-[gray] rounded w-[70%]' />
        <button className='p-3 bg-[green] w-[100px] rounded text-[white] cursor-pointer'>Log in</button>
      </form>
      <span>Dont you have an account? <a className='text-[red] text-[18px] font-[700]' href="/pages/auth/register">Register</a></span>
    </div>
    </section>
  )
}

export default Login;

