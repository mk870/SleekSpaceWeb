import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const MobileView:React.FC<Props> = ({
  children
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar viewType='mobile'/>
      <div className="flex p-2 bg-yellow-950 flex-1 h-full">{children}</div>
      <Footer />
  </div>
  )
}

export default MobileView