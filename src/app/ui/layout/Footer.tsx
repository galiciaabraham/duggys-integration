"use client"

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export default function Footer() {

    const [lastUpdated, setLastUpdated] = useState("");
    
    useEffect(() => {
        setLastUpdated(document.lastModified)
    }, [])

    return (
        <>
                <p className="bg-main-2 p-2 text-secondary-1 font-montserrat text-center"><span id="copyright-year">{new Date().getFullYear()}</span> Mamita's Food &copy; || All rights reserved || Testing Environment ||<span> {lastUpdated} </span></p>
        </>
    );
}