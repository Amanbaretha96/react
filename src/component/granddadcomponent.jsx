import { useState } from "react"
import Daughterpage from "../pages/daughterpage"

const Granddadcomponent = (props) => {
    const {shop,setShop} = props
    const [cloth,setCloth] = useState("readymade")
    return(
        <div>
            <Daughterpage shop = {shop} setShop = {setShop} cloth = {cloth} setCloth ={setCloth} />
        </div>
    )
} 
export default Granddadcomponent;