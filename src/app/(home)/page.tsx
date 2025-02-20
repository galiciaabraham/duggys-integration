import { Hero } from "../ui/resources/Hero";


export default function Home() {
  return (
    <div>
      <Hero/>
      <p className="bg-main-1 w-full">Hello World</p>
      <div className="w-1/2 h-1/2 bg-main-2 border-main-1"></div>
    </div> 
  )
}
