import { useState } from "react";
import Com1 from "./Com-1";
import { createContext } from "react";
const myContext= createContext();

const App=({user})=>{
  const [name, setName]=useState("Ravan");
  return(
    <>

        <h1>Welcome :  {name}</h1>
       <myContext.Provider value={{name}}>
       <Com1 user={name}/>
       </myContext.Provider>
       
    </>
  )
}

export default App;
export {myContext};