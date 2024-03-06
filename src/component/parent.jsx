import { useState } from "react"
import Grandparent from "./grandparent";

const Parent = () => {
    const [meet,setMeet] = useState("patel");
    console.log(meet)
    return(
        <div>
            {meet}
            <Grandparent sonu={sonu} setSonu={setSonu} />
        </div>
    )
}
export default Parent;