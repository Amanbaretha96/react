import Dadcomponent from "../component/dadcomponent"

const Daughterpage = (props) => {
const {shop,setShop,cloth,setCloth} = props
console.log(shop)

const Custumer = () => {
    setShop("antarmana")
    setCloth("kapdes")
}

return(
    <div>
        <button onClick={Custumer} > click me </button>
        
    </div>
)
}
export default Daughterpage;