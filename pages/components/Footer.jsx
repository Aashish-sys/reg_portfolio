import Link from 'next/link';
import React from 'react';
import {CgTwitter} from 'react-icons/cg'
import {TbBrandTelegram} from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='h-20 items-center justify-center space-x-10 flex'>
      <Link href='https://twitter.com/chethazz'>
      <CgTwitter></CgTwitter>
      </Link>
      <Link href='https://t.me/chethazz'>
      <TbBrandTelegram></TbBrandTelegram>
      </Link>
    </div>
  )
}

export default Footer