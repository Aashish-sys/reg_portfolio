import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiPexels } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="navbar fixed w-full items-center">
        <div className="flex  max-w-[1100px] justify-between m-auto">
          <h1 className="cc">Regulus</h1>
          <button
            onClick={() => setNav(!nav)}
            className="block x-lg:hidden z-100"
          >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed  top-20 right-0 left-0 bottom-0 flex justify-center items-center w-full h-80% bg-cream text-center ease-in duration-500"
            : "fixed  top-[-100%] right-0 left-0 bottom-[100%] flex justify-center items-center w-full h-50% bg-cream text-center ease-in duration-500"
        }
      >
        <ul>
          <div className="flex btn-bg">
            <div className="m-4 card1 text-4xl hover:scale-110 duration-300 float-right">
              <Link href="https://www.pexels.com/@regulus-photography-100262152/">
                <SiPexels color="white" className="btn1"></SiPexels>
              </Link>
            </div>
            <div className="m-4 card2 text-4xl hover:scale-110 duration-300">
              <Link href="https://github.com/chethazz">
                <FaGithubSquare color="white" className="btn2"></FaGithubSquare>
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="m-4 card3 text-4xl hover:scale-110 duration-300">
              <Link href="https://pixelos.net/download/violet">
                <BsAndroid2 color="white" className="btn3"></BsAndroid2>
              </Link>
            </div>
            <div className="m-4 card4 text-4xl hover:scale-110 duration-300">
              <Link href="https://www.instagram.com/chethazz/">
                <RiInstagramFill color="white" className="btn4"></RiInstagramFill>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
