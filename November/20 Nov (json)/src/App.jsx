import { useState } from "react";
import axios from "axios";
const App=()=>{

    const [data, setData]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/Students";
        axios.get(api).then((res)=>{
            setData(res.data);
            console.log(res);
        });
    }

    const ans=data.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })

    return(
        <>
            <h1>Display Axois Data</h1>
            <button onClick={loadData} >Show Data</button>
            <hr />
            <table border={2} width="100%">
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default App;