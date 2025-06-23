"use client";

import { Fira_Sans, Montserrat, Phudu, Fenix } from "next/font/google";
import { useEffect, useState } from "react";

// Define font variables
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const phudu = Phudu({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const fenix = Fenix({ subsets: ["latin"], weight:"400"});

type MenuItem = {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
}

type MenuOptionsProps = {
    category: string;
    title: string;
}

export function MenuOptions({category, title}: MenuOptionsProps) {
    
    const [menuItems, setMenuItems ] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch(`/api/menu?category=${category}`).then((res) => res.json()).then((data)=>{
            setMenuItems(Array.isArray(data) ? data : []) ;
            setLoading(false);
        });
    },[category]);

    return( 
        <div id={`menu-${category}`} className="border-r-main-1 p-4 m-2">
                            <h2 className={`${phudu.className} font-bold text-3xl text-center p-3 text-secondary-3`}>{title}</h2>
                            {loading ? (
                                <p className="text-center p2 text-lg">Loading...</p>
                            ) : (
                                <table className="w-full text-left border border-black-200 p-2">
                                <thead className="bg-secondary-1 bg-opacity-15">
                                <tr>
                                    <th scope="col" className="p-2">Name</th>
                                    <th scope="col" className="p-2">Description</th>
                                    <th scope="col" className="p-2">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {menuItems.map((item) =>    (
                                        <tr key={item.id} className="border=t">
                                            <td className="p-2">{item.name}</td>
                                            <td className="p2 italic text-sm">{item.description}</td>
                                            <td className="p-2">{item.price}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            )}
                            
                        </div>
    )
}