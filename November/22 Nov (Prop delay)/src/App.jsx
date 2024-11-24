import { useState } from "react";
import Com1 from "./Com-1";

const App=({user})=>{
  const [name, setName]=useState("Ram");
  return(
    <>

        <h1>Welcome : Ram {name}</h1>
       
        <Com1 user={name}/>
    </>
  )
}

export default App;