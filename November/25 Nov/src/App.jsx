import { useState, createContext } from "react";
import Cybrom from "./Cybrom";
const myContext=createContext();
const App=()=>{
    const [user, setUser]=useState("Ram");
    return(
        <>
            <h1>Welcome to My App Myname : {user}</h1>
            <button onClick={()=>{setUser("Roshan")}}>Click Here</button>
            <myContext.Provider value={{user, setUser}}>
                <Cybrom />
            </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};
