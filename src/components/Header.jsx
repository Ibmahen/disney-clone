import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header({ onSearch, onGoHome }) {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      onClick: onGoHome
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center justify-between p-5">
      {/* Bagian Kiri: Logo + Item Menu */}
      <div className="flex items-center gap-8">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
        />
        {/* Item Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} onClick={item.onClick} />
          ))}
        </div>
        {/* Logika menu mobile (HiDotsVertical) */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} onClick={item.onClick} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212]
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem key={item.name} name={item.name} Icon={item.icon} onClick={item.onClick} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      
      {/* Bagian Kanan: Search Bar + Avatar Pengguna */}
      {/* Grupkan search bar dan avatar dalam satu div flex untuk menempatkannya di kanan */}
      <div className="flex items-center gap-4"> {/* gap-4 untuk jarak antara search bar dan avatar */}
          <form onSubmit={handleSearchSubmit} 
                className="flex items-center bg-gray-800 rounded-md p-1">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="bg-transparent text-white focus:outline-none flex-1 px-3 py-1.5"
              />
              <button type="submit" className="text-gray-400 text-xl px-2">
                <HiMagnifyingGlass />
              </button>
          </form>
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            className="w-[40px] rounded-full"
          />
      </div>
    </div>
  );
}

export default Header;