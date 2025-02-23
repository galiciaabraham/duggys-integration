import { Hero } from "@/app/ui/resources/Hero";
import { LocationMap } from "@/app/ui/resources/LocationMap";
import { Reviews } from "@/app/ui/resources/Reviews";
import { Address } from "@/app/ui/resources/Address";


export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="grid grid-cols-1 md:grid-cols-2 m-3 ">
      < Reviews />
      < LocationMap/>
      < Address />
      </div>
    </div> 
  )
}
