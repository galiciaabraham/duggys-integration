import { Fira_Sans, Montserrat} from "next/font/google";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });


export function Reviews() {
  return (
    <div className="bg-secondary-3 rounded-lg m-4 p-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 shadow-lg">
        <h1 className="font-firaSans m-2 text-center text-secondary-1 drop-shadow-lg">Reviews</h1>
        <p className="font-montserrat p-3 m-2 text-secondary-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente nobis sit ex eos in quibusdam vitae voluptatibus iste ullam fugit, quas natus temporibus consequatur corrupti distinctio tempore repudiandae itaque dolorum officiis! Illum esse ad iure. Et id minus quam, ullam ab totam quo quod alias, pariatur rerum architecto quae.</p>
    </div> 
  )
}