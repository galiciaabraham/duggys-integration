import Link from 'next/link';
import Image from 'next/image';
import { Fenix } from "next/font/google";

const fenix = Fenix({ subsets: ["latin"], weight:"400"});


export default function DuggysLogo () {
    return (
    <>
        <Link href="/" className="flex items-center md:ml-auto w-full max-w-40">
        <h1 className='font-fenix font-bold text-4xl text-center m-auto p-3 text-secondary-1 drop-shadow-xl'>Mamita's Food</h1>
        </Link>
        
    </>
    )
}