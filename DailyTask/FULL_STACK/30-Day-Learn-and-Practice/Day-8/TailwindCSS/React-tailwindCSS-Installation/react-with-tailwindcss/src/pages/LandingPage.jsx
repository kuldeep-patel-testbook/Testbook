import React from 'react'
import manCallingImg from '../assets/calling-new-one.png';

const LandingPage = () => {
  return (
    <div>
        <nav className='bg-purple-900 text-white flex justify-between'>
          <span className='text-xl flex items-center mx-3 font-bold'>PhonesMania</span>
            {/* <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile-image" className='h-12 pt-3 px-3 rounded-2xl' /> */}
            <ul className='px-28 py-4 flex space-x-11 justify-end'>
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Catalog</li>
                <li className="cursor-pointer">Contact Us</li>
            </ul>
        </nav>
        <main className='bg-fuchsia-100 flex'>
          <div className="main py-40 pl-9">
            <div className='text-6xl'> 
              The best phone in the town First
            </div>
            <p className='py-3 w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est exercitationem, cumque nobis pariatur dicta inventore aut et aperiam reprehenderit porro earum voluptatem similique ipsam soluta accusamus omnis debitis labore!</p>
            <div className="my-4">
              <button className="bg-purple-800 px-3 py-2 text-white rounded-2xl  mx-2 border-2 hover:text-purple-900 hover:bg-white border-2">Buy Now</button>
              <button className="bg-purple-800 px-3 py-2 text-white rounded-2xl  hover:text-purple-900 hover:bg-white border-2 mx-2">Contact Us</button>
            </div>
          </div>
          <div className='flex content-center'>
            <img src={manCallingImg} alt="man-calling" className='h-80' />
          </div>
        </main>
    </div>
  )
}

export default LandingPage