// import { useState, useMemo } from "react";
// const App=()=>{
//    const [mynum, setMynum]=useState(0);
//    const [nm, setNm]=useState("");
//    const heavyFun=useMemo(()=>{
//       for(var i=0; i<=1000000000; i++){

//       }
//       return mynum*2;
//    }, [mynum]);
//    return(
// <>
//          <h1>Welcome to my form</h1>
//          <h1>{heavyFun}</h1>
//          <input type="number" value={mynum} onChange={(e)=>{setMynum(e.target.value)}}/>
//          <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}}/>

// </>
//    )
  
//   }
//   export default App;


import { useState, useMemo } from "react";
const App=()=>{
   const [mynum, setMynum]=useState(0);
   const [mydata, setMydata]=useState(100);

   const multi=useMemo(()=>{
      console.log("*********");
      return mynum*3;
   }, [mynum])
   
   return(
<>
         <h1>Welcome to Cybrom Bhopal</h1>
      
         <h1>My Multipilication : {multi}</h1>
         <h1>My Increment : {mynum}</h1>
         <h1>My Decrement : {mydata}</h1>
        <button onClick={()=>{setMynum(mynum+1)}}>Increment</button>
        <button onClick={()=>{setMydata(mydata-1)}}>Decrement</button>
</>
   )
  
  }
  export default App;