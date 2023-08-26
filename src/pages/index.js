import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Header from '@/Component/Header/Header';
import Footer from '@/Component/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowNav(false);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  return (
<React.Fragment>
<Header  isOpen={isOpen}
        openModal={openModal}
        CloseModal={CloseModal}
        showNav={showNav}
        setShowNav={setShowNav}
        onMoboClicks={onMoboClicks}/>
        <Footer/>
</React.Fragment>
  )
}
