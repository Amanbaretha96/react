import { useState } from "react";
import Diamond from "./diamond";

const Hadder = () => {
    const [joy , setJoy] = useState("home");
    console.log(joy)
    return(
        <div>
        {joy}
            <Diamond joy = {joy} setJoy = {setJoy} />
        </div>
    )
} 
export default Hadder;