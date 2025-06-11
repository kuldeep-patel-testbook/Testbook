import React from 'react'
import microsoftLogo from '/micro-logo.png'
import bg1 from '/bg1.avif'
import p1Icon from '/Link-List-Icons-Microsoft-365.svg'
import p2Icon from '/Link-List-Icons-Xbox-Games-Consoles.svg'
import p3Icon from '/Link-List-Icons-Surface-Devices.svg'
import searchIcon from '/icons8-search.svg'
import cartIcon from '/shopping-cart.png'
import accountIcon from '/login.png'

const App = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar flex justify-between items-center p-4">
        <div className='flex justify-center items-center md:order-2'>
          <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div className="search w-6 md:hidden" ><img src={searchIcon} alt="" /></div>
        </div>

        <div className="logo text-center md:order-1 flex">
          <div className="w-35 justify-start"><img src={microsoftLogo} alt="" /></div>
          <div className="features  md:flex md:items-center md:mx-4 md:space-x-6 absolute inset-0 w-fit md:w-auto md:static md:bg-white bg-gray-100 -translate-x-96 md:translate-x-0">
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Microsoft 365</div>
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Teams Copilot</div>
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Windows</div>
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Surface</div>
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Xbox</div>
            <div className="fitem hover:underline-offset-8 hover:cursor-pointer">Support</div>
          </div>
        </div>

        <div className="cart mr-12 text-center md:order-3 flex">
          <div className="search hidden md:block hover:underline hover:cursor-pointer">All Microsoft </div>
          <div className='mx-2 hover:underline-offset-8 hover:cursor-pointer'>Search</div>
          <img className='hidden md:block' src={searchIcon} alt="" />
          <div className='ml-1 w-6 flex hover:underline-offset-8 hover:cursor-pointer'>
            Cart <img src={cartIcon} alt="" />
            <img src={accountIcon} alt="" /> 
          </div>
        </div>

      </div>

      <div className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2] mx-2">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-32">
          <h1 className="text-2xl font-medium md:text-4xl mx-5">
            Meet Surface Laptop
          </h1>
          <p className="mb-4 w-3/4 mx-5 text-center md:text-left">
            Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.
          </p>
          <button className='text-white bg-black px-4 py-2 font-bold my-6'>Shop Now</button>
        </div>
        <div className="right">
          <img className='md:w-[64rem]' src={bg1} alt="" />
        </div>
      </div>

      <div className="promo space-y-6 flex flex-col lg:flex-row justify-center">
        <div className="item flex items-center mx-4 mt-4 space-x-2 md:flex-col">
          <img className='w-12' src={p1Icon} alt="" />
          <span className='font-medium md:w-[8rem] md:text-center text-sm my-4 hover: cursor-pointer hover:underline'>Choose your Microsoft 365</span>
        </div>
        <div className="item flex items-center mx-4 mt-4 space-x-2 md:flex-col">
          <img className='w-12' src={p2Icon} alt="" />
          <span className='font-medium md:w-[8rem] md:text-center text-sm my-4 hover: cursor-pointer hover:underline'>Shop Xbox</span>
        </div>
        <div className="item flex items-center mx-4 mt-4 space-x-2 md:flex-col">
          <img className='w-12' src={p1Icon} alt="" />
          <span className='font-medium md:w-[8rem] md:text-center text-sm my-4 hover: cursor-pointer hover:underline'>Get Windows 11</span>
        </div>
        <div className="item flex items-center mx-4 space-x-2 md:flex-col">
          <img className='w-12' src={p3Icon} alt="" />
          <span className='font-medium md:w-[8rem] md:text-center text-sm my-4 hover: cursor-pointer hover:underline'>Explore Surface devices</span>
        </div>
      </div>
    </div>
  )
}

export default App