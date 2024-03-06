import { useState } from "react"
import Grandfathercomponent from "./grandfathercomponent"
// import Sonpage from "../pages/sonpage"

const Fathercomponent = () => {
    const [cool,setCool] = useState("down")
    // console.log(cool)
    return(
        <div>
              {cool}
              <p>hello</p>
              <Grandfathercomponent setCool = {setCool} /> 
              {/* <Sonpage cool = {cool} setCool = {setCool} /> */}
        </div>
    )
}
export default Fathercomponent;