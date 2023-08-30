import React, { useState } from 'react';
import Display from '../componentes/Display';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <header className='top-0 left-0 w-full p-6 flex justify-between'>
        <img className='h-10 w-10 cursor-pointer md:h-14 w-14' onClick={() => setOpen(true)} src="../public/images/menu.svg" alt="Menu" />
        <img className='h-10 w-10 md:h-14 w-14' src="../public/images/logo-minga.svg" alt="Logo" />
      </header>
      {open && <Display open = {open} setOpen = {setOpen} />} 
    </>
  );
}

export default Navbar;


