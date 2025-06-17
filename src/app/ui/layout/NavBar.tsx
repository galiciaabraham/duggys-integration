'use client';

import  ToggleNav  from '@/app/ui/utilities/nav-toggle';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });




export default function NavBar (){
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const handleHamburguer = () => { //This function changes the state isOpen when the ToggleNav button is clicked.
    setOpen(!isOpen);  //In line 30, a ternary operator toggles the hidden and flex class atributes based on the state isOpen
  }



  return (
    <>
    <nav className="bg-main-1  md:flex-grow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4">
      <div className="flex w-full justify-center md:justify-end gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <ToggleNav isOpen={isOpen} onToggle={handleHamburguer}/>
      </div>
      <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:order-1"`}>
        <ul className="flex flex-col md:justify-evenly p-4 md:p-0 mt-4 font-medium  md:text-secondary-1 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:border-0 w-full text-center">
          <li className=  {`${pathname === "/" ? "active text-main-2 bg-secondary-1 md:text-main-2 md:bg-secondary-1 md:hover:bg-secondary-2 md:hover:text-secondary-1"  : "bg-main-1 md:hover:bg-secondary-1 md:hover:text-main-1 text-secondary-1 md:shadow-none"} p-2 m-2 rounded-md shadow-md `}>
            <Link href="/" className={`font-monserrat block py-2 px-3 rounded md:p-0 `}  aria-current="page" onClick={() => {setTimeout(() => {setOpen(!isOpen)}, 500)}} >Home</Link>
          </li>
          <li className=  {`${pathname === "/menu" ? "active text-main-2 bg-secondary-1 md:text-main-2 md:bg-secondary-1 md:hover:bg-secondary-2 md:hover:text-secondary-1"  : "bg-main-1 text-secondary-1 md:hover:bg-secondary-1 md:hover:text-main-1 md:shadow-none"} p-2 m-2 rounded-md shadow-md `}>
            <Link href="/menu" className={`font-monserrat block py-2 px-3 rounded md:p-0 `}  aria-current="page" onClick={() => {setTimeout(() => {setOpen(!isOpen)}, 500)}} >Menu</Link>
          </li>
          <li className=  {`${pathname === "/about" ? "active text-main-2 bg-secondary-1md:text-main-2 md:bg-secondary-1 md:hover:bg-secondary-2 md:hover:text-secondary-1"  : "bg-main-1 text-secondary-1 md:hover:bg-secondary-1 md:hover:text-main-1 md:shadow-none"} p-2 m-2 rounded-md shadow-md `}>
            <Link href="/about" className={`font-monserrat block py-2 px-3 rounded md:p-0 `}  aria-current="page" onClick={() => {setTimeout(() => {setOpen(!isOpen)}, 500)}} >About Us</Link>
            </li>
        </ul>
      </div>
      </div>
    </nav>
    </>
    )
}