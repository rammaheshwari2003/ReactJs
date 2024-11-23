


const EmpDesign=(props)=>{
    return(
        <div className="emp">
        <h1>Employee Id : {props.eno}</h1>
        <h2>Name : {props.enm}</h2>
        <h2>Designation : {props.edesig}</h2>
        <h2>Salary : {props.esal}</h2>
        </div>

    )
}
export default EmpDesign;