import Image from "next/image";
import { Address } from "@/app/ui/resources/Address";

export default function About() {
    return (
      <div className="mt-2 mb-2 bg-main-2 p-5">
        <div className="flex justify-center">
        <Image src={"/stock/business-owner.webp"} alt="A picture of the business owner courtesy of Pexel.com"  width={2953} height={1969} className="rounded-lg shadow-md w-1/2 m-10"></Image>
        </div>
        <h1 className="text-6xl text-secondary-1 p-3 m-2 text-center font-bold">About Us</h1>
        <div className="p-4 m-5">
        <p className="p-2 m-2 text-lg text-secondary-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste commodi porro, soluta dolore adipisci a! A voluptate reiciendis, distinctio perferendis neque ducimus totam laboriosam officiis architecto quibusdam eum? Numquam assumenda incidunt eius maxime sit magni nulla perferendis nisi, reiciendis voluptate excepturi ratione placeat ipsum beatae! Sit, deleniti odio eum aut temporibus eius neque perferendis inventore, sapiente itaque rerum sint voluptatibus, fugiat quas? Ratione tempore molestias quae et a repudiandae aliquid iusto totam molestiae dolorem necessitatibus suscipit eum voluptas ad quos, doloremque quas expedita distinctio. Maxime nulla veniam, provident illo quisquam aperiam, deserunt incidunt maiores error, quasi odit debitis at!</p>
        </div>
        <Address/>
      </div> 
    );
  }
  