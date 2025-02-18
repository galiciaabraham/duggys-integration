'use client';

import  ToggleNav  from '@/app/ui/utilities/nav-toggle';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";




export default function NavBar (){
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const handleHamburguer = () => { //This function changes the state isOpen when the ToggleNav button is clicked.
    setOpen(!isOpen);  //In line 30, a ternary operator toggles the hidden and flex class atributes based on the state isOpen
  }



  return (
    <>
    <nav className="bg-main-1 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <ToggleNav isOpen={isOpen} onToggle={handleHamburguer}/>
      </div>
      <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1"`}>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:text-main-2 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:border-0 w-full text-center">
          <li className=  {`${pathname === "/" ? "active text-main-2 bg-main-1 hover:bg-main-2 hover:text-secondary-2 md:bg-slate-200-2 md:text-secondary-2 md:hover:bg-main-1 md:hover:text-main-2"  : "md:text-main-2 bg-main-2 text-secondary-2 hover:bg-main-1 hover:text-main-2 md:bg-main-1 md:shadow-none md:hover:bg-main-2 md:hover:text-secondary-2 "} p-2 m-2 rounded-md shadow-md `}>
            <Link href="/" className={`font-text block py-2 px-3 rounded md:p-0 `}  aria-current="page" onClick={() => {setTimeout(() => {setOpen(!isOpen)}, 500)}} >Home</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </>
    )
}