import { useState } from "react"
import Sixthcomponent from "./sixthcomponent";

const Fifthcomponent = () => {
    const [aman , setAman] = useState("baretha");
    return(
        <div>
          {aman}
          <Sixthcomponent aman ={aman} setAman={setAman} />
        </div>
    )
}
export default Fifthcomponent;