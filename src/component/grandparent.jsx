import { useState } from "react"
import Childpage from "../pages/childpage"

const Grandparent = (props) => {
    const {meet ,setMeet} =props
    const [sonu,setSonu] = useState("monu")
    console.log(sonu)
    return(
        <div>
            {sonu}
            <Childpage meet = {meet} setMeet = {setMeet} sonu = {sonu} setSonu = {setSonu} />
        </div>
    )
}
export default Grandparent; 