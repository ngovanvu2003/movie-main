"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {useState ,useEffect} from 'react'
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  const [isScrolled,setIsScroll] = useState(false)
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () =>{
      window.addEventListener("scroll", handleScroll)
    }
  },[])
  return (
    <header className={`${isScrolled  && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>

        <MenuItem title={"Trang chủ"} address={"/"} Icon={AiFillHome} />
        <MenuItem title={"Thể loại"} address={"/"} Icon={AiFillInfoCircle} />
        <MenuItem title={"Xếp hạng"} address={"/"} Icon={AiFillInfoCircle} />
        <MenuItem title={"Bộ lọc"} address={"/"} Icon={AiFillInfoCircle} />
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
          <AiOutlineSearch className="hidden h-6 w-6 sm:inline" />
          {/* <p className="hidden lg:inline">Sex</p> */}
          <DarkMode />
          <Link href={"/account"}>
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
     
    </header>
  );
};

export default Header;
