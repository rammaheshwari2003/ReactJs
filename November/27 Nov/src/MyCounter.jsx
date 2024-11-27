import { useContext } from "react";
import { myContext } from "./counterContext";
const MyCounter=()=>{
    const {cnt, setCnt}=useContext(myContext);
    return(

        <>
        
        <h1>My Counter App</h1>
        <button onClick={()=>{setCnt(cnt+1)}}>Increament</button>
        <h1>{cnt}</h1>
        <button onClick={()=>{setCnt(cnt-1)}}>Decreament</button>
        </>
    )
}
export default MyCounter;