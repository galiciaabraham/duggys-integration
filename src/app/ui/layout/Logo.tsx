import Link from 'next/link';
import Image from 'next/image';

export default function DuggysLogo () {
    return (
    <>
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse w-full max-w-40">
        <Image 
            src="/layout/Duggys.webp"
            width={512}
            height={512}
            className="h-20 w-20" 
            alt="Duggys Logo"
        />
        </Link>
        
    </>
    )
}