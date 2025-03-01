import { Fira_Sans, Montserrat, Phudu, Fenix } from "next/font/google";

// Define font variables
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const phudu = Phudu({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const fenix = Fenix({ subsets: ["latin"], weight:"400"});

export function MenuOptions() {
    return( 
        <div id="dishes" className="border-r-main-1">
                            <h2 className="font-phudu font-bold text-3xl text-center p-3 text-secondary-1">Dishes</h2>
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Tacos de Cochinita</td>
                                    <td>5.99</td>
                                </tr>
                                <tr>
                                    <td>Tacos de Asada</td>
                                    <td>7.99</td>
                                </tr>
                                <tr>
                                    <td>Tacos de Pastor</td>
                                    <td>6.99</td>
                                </tr>
                                </tbody>
                                </table>
                        </div>
    )
}