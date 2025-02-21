import Link from 'next/link';
import Image from 'next/image';

export default function Social () {
    return (
    <>
        <div className="flex gap-2 m-2 p-2">
        <Link href="/" className="flex items-center md:ml-auto">
            <Image src={'/social/facebook.avif'} alt="Facebook logo, click to go to our facebook page" width={64} height={64} className="rounded-lg shadow-md md:hover:shadow-2xl"></Image>
        </Link>
        <Link href="/" className="flex items-center md:ml-auto">
            <Image src={'/social/instagram.avif'} alt="Instagram logo, click to go to our instagram page" width={64} height={64} className="rounded-lg shadow-md md:hover:shadow-2xl"></Image>
        </Link>
        </div>
        
    </>
    )
}