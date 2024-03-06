import { useState } from "react"
import Fifthcomponent from "./fifthcomponent";
import Sixpage from "../pages/sixthpage";

const Sixthcomponent = (props) => {
    
    const[data,setData] = useState("more");
    const {aman , setAman} = props
    
    return(
        <div>
            {data}
            <Sixpage aman = {aman} setAman = {setAman} data ={data} setData= {setData} />
        </div>
    )
}
export default Sixthcomponent;