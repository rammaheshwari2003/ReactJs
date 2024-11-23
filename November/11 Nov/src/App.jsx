// import Student from "./StuData";

// const ans=Student.map((key)=>{

//     return(
//         <>
//             <tr>
//                 <td>{key.rollno}</td>
//                 <td>{key.name}</td>
//                 <td>{key.city}</td>
//                 <td>{key.fees}</td>
//             </tr>
//         </>
//     )

// })
// const App=()=>{
//     return(
//         <>
//             <table width="100%" border="2" style={{textAlign:"center"}}>
//                 <tr>
//                     <th>Roll No</th>
//                     <th>Name</th>
//                     <th>City</th>
//                     <th>Fees</th>
//                 </tr>
//                 {ans}
//             </table>

//         </>

//     )
// }
// export default App;




import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const ans=EmpData.map((key)=> <EmpDesign
eno={key.empno}
enm={key.name}
edesig={key.designation}
esal={key.salary}
/>)

const App=()=>{
    return(
        <div id="empwrapper">
            {ans}
        </div>
    )

}
export default App;