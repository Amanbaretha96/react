import { useState } from "react"
import Sonpage from "../pages/sonpage"

const Grandfathercomponent = (props) => {
    const [take,setTake] = useState("uper")
const {cool,setCool} = props
return(
    <div>
        {take}
        <Sonpage cool = {cool} setCool = {setCool} take = {take} setTake = {setTake} />
    </div>
)
}
export default Grandfathercomponent;