const Sixpage = (props) => {
    const {data,setData} = props
    const {aman,setAman} = props
 
 const Get = () => {
    setData("less")
 }   

 const Red = () => {
    setAman("kumar") 
 }
    return(
        <div>
      <p>hello</p>
      <button onClick={Get} > click me</button>
      <button onClick={Red} > tak a shot</button>
        </div>
    )
}
export default Sixpage;