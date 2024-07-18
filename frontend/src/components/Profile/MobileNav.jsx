import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  return (
    <div className='w-full flex items-center justify-between my-8'>
        <Link to="/profile"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Favourites
            </Link>
            <Link to="/profile/orderHistory"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Order History
            </Link>
            <Link to="/profile/settings"
            className="text-[#086D8A] font-semibold w-full py-2 text-center hover:bg-[#DAE9ED] rounded transition-all duration-200 mt-2">
                Settings
            </Link>
    </div>
  )
}

export default MobileNav