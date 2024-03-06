import { useState } from "react";
import Daughterpage from "../pages/daughterpage";

const Dadcomponent = () => {
    const [shop,setShop] = useState("marketing")
    return(
        <div>
            <p>
                 {shop}
                <h2>I am working in indore</h2>
                <Daughterpage shop ={shop} setShop={setShop} />
            </p>
        </div>
    )
} 
export default Dadcomponent;