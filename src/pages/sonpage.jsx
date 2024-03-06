// import Fathercomponent from "../component/fathercomponent"

// import Fathercomponent from "../component/fathercomponent"

const Sonpage = (props) => {
    const {cool,setCool} = props
    const {take,setTake} = props

const Bet = () => {
    setCool("super")
    setTake("pop")
}    
    return(
        <div>
         <button onClick={Bet} > click me </button>
         {/* <Fathercomponent  /> */}
            {/* <Fathercomponent cool = {cool} setCool = {setCool} /> */}
        </div>
    )
}
export default Sonpage;