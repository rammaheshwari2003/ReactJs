import {myContext} from "./App";
import { useContext, useState } from "react";
const Bhopal=()=>{
    const {user, setUser}=useContext(myContext);
    return(
        <>
        <h1>Welcome to : {user}</h1>
        <button onClick={()=>{setUser("Rahul")}}>Click Here</button>
        
        </>
    )
}
export default Bhopal;
