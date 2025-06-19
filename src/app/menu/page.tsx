import { MenuOptions } from "../ui/resources/MenuOptions";
import { Fira_Sans, Montserrat, Phudu, Fenix } from "next/font/google";

// Define font variables
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const phudu = Phudu({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const fenix = Fenix({ subsets: ["latin"], weight:"400"});

export default function Menu() {
    return(
        <>
             <div className="relative bg-accent-1 grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 mt-3">
                    <div className="absolute inset-0 bg-[url(/stock/cochinita.webp)] bg-cover bg-center opacity-20 blur-sm"></div>
                        <h1 className="font-fenix font-bold text-8xl text-center p-3 text-secondary-1 drop-shadow-xl md:col-span-2">Menu</h1>
                        <div className="md:col-span-1">
                        <MenuOptions category="taco_order" title="Order of Tacos"/>
                        </div>
                        <div className="md:col-start-2">
                        <MenuOptions category="appetizer" title="Appetizers"/>
                        </div>
                        <div className="md:col-span-1">
                        <MenuOptions category="individual_taco" title="Individual Tacos"/>
                        </div>
                        <div className="md:col-start-2">
                        <MenuOptions category="drink" title="Drinks"/>
                        </div>
                        <div className="md:col-start-2 ">
                        <MenuOptions category="additional" title="Additionals"/>
                        </div>
                    </div>
                        
        </>
    )
}