import { useContext } from "react";
import {myContext} from "./App";


const Com5=({user})=>{
    const {name}=useContext(myContext);
    return(
        <>
        <h1>Component - 5,  Name : {user}</h1>
        
        </>
    )
}

export default Com5;