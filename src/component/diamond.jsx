import { useState } from "react"
import Hadder from "./hadder";
import Fouter from "../pages/fouter";

const Diamond = (props) => {
    const {joy,setJoy} = props
    const [cat ,setCat] = useState("rat");
    console.log(cat);
    return(
        <div>
        {cat}
          <Fouter joy = {joy} setJoy = {setJoy} cat = {cat} setCat = {setCat} />
          
        </div>
    )
}
export default Diamond;