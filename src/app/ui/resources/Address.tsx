import { Fira_Sans, Montserrat} from "next/font/google";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });


export function Address() {
  return (
    <div className="bg-secondary-3 rounded-lg m-5 p-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 shadow-lg">
        <h1 className="font-firaSans m-2 text-center text-secondary-1 drop-shadow-lg">Address & Contact Info</h1>
        <p className="font-montserrat p-3 m-2 text-secondary-1">Call us:</p>
        <p className="font-montserrat p-3 m-2 text-secondary-1">Visit us:</p>
        <p className="font-montserrat p-3 m-2 text-secondary-1">Contact us by Email:</p>
    </div> 
  )
}