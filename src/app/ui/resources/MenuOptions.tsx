import { Fira_Sans, Montserrat, Phudu, Fenix } from "next/font/google";

// Define font variables
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const phudu = Phudu({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const fenix = Fenix({ subsets: ["latin"], weight:"400"});

export function MenuOptions() {

    return( 
        <div id="order-of-tacos" className="border-r-main-1">
                            <h2 className="font-phudu font-bold text-3xl text-center p-3 text-secondary-1">Dishes</h2>
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">Dish Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {/* Insert the data in here*/}
                                </tbody>
                                </table>
                        </div>
    )
}