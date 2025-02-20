import Image from "next/image"
import { Fira_Sans, Montserrat, Phudu, Fenix } from "next/font/google";

// Define font variables
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const phudu = Phudu({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

const fenix = Fenix({ subsets: ["latin"], weight:"400"});

export function Hero() {
    return (
    <>
        
        <div className="relative bg-accent-1 grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 mt-3">
        <div className="absolute inset-0 bg-[url(/stock/molcajete.webp)] bg-cover bg-center opacity-35 blur-sm"></div>
                
                <div className=" relative z-10 m-3 p-4 text-secondary-1">
                    <h1 className="font-fenix font-bold text-8xl text-center p-3 text-secondary-1 drop-shadow-xl">Duggy's</h1>
                    <h2 className="font-firaSans text-center text-6xl p-3 text-secondary-1 drop-shadow-xl"> Welcome to your new favorite!</h2>
                    <h3 className=" font-firaSans  font-bold text-6xl p-6 drop-shadow-lg">Fresh</h3>
                    <h3 className="font-phudu text-5xl p-3 drop-shadow-lg">Home Made</h3>
                    <h3 className="font-firaSans  font-bold text-6xl p-3 drop-shadow-lg">Natural</h3>
                    <h3 className="font-phudu text-5xl p-6 drop-shadow-lg">Delicious</h3>
                </div>
                <div className=" md:order-2 flex flex-col justify-center p-4 m-4 z-20">
            <Image src={"/stock/tacos.webp"}
            width={2836} height={1891} alt="A picture of tacos courtesy of Cristian Rojas and Pexel.com" className="rounded-lg shadow-md">
            </Image>
            </div>
            </div>
            
            
            
    </>
    )
}