// use state hook

import { useState } from "react";
// --------- 1st ------

// const App=()=>{

//   const [city, setCity]=useState("Bhopal");

//   const myval=()=>{
//     setCity("Indore");
//   }

//   return(
//     <>
//       <h1>Welcome to : {city} </h1>        

// <button onClick={myval} >Click Here</button>

//     </>
//   )
// }
// export default App;






// ----- 2nd ----------

// const App=()=>{

//   const [color, setColor]=useState("red");

 
//   return(
//     <>
//       <h1 style={{color:color}}>Welcome to : {color} </h1>        

// <button onClick={()=>{setColor("green")}} >Green</button>
// <button onClick={()=>{setColor("orange")}} >orange</button>
// <button onClick={()=>{setColor("blue")}} >blue</button>
// <button onClick={()=>{setColor("yellow")}} >yellow</button>

//     </>
//   )
// }
// export default App;


// ----- || Counter App || -----------

const App=()=>{

  const [cnt, setCnt]=useState(0);

  const myInc=()=>{
    setCnt(cnt+1);
  }
  const myDec=()=>{
    if(cnt<=0){
      alert("You are not decreament leass than zero");
    }
    else{
      setCnt(cnt-1);
    }
  }
 
  return(
    <>
      <center>
          <h1>My counter : {cnt}</h1>
          <button onClick={myInc}>Increament</button>
          <button onClick={myDec}>Decreament</button>
          <button onClick={()=>{setCnt(0)}}>Reset</button>
      </center>

    </>
  )
}
export default App;