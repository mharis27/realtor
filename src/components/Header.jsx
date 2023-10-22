import React from 'react';
import { useLocation, useNavigate } from 'react-router';
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true;
    }
    return false;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 pt-3 max-w-7xl mx-auto">
        <div className="font-mono font-semibold text-lg align-middle flex cursor-pointer" onClick={()=>navigate("/")}>
          <img src="/logo512.png" alt="Realtor Logo" className="h-6" />EALTOR
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`pb-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
            <li className={`pb-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
            <li className={`pb-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/profile") && "text-black border-b-red-500"}`} onClick={()=>navigate("/profile")}>Profile</li>
            <li className={`pb-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign In</li>
            <li className={`pb-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/sign-up") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-up")}>Sign Up</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
