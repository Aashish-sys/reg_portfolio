import Link from "next/link";
import React from "react";
import { CgTwitter } from "react-icons/cg";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" items-center justify-center space-x-20 flex pt-10 pb-10">
      <Link href="https://twitter.com/chethaz">
        <CgTwitter size={30}></CgTwitter>
      </Link>
      <Link href="https://t.me/chethazz">
        <TbBrandTelegram size={30}></TbBrandTelegram>
      </Link>
    </div>
  );
};

export default Footer;
