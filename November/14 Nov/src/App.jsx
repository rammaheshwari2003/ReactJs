const App=()=>{

  const display=()=>{
    alert("Event examples!!");
  }
  return(
    <>
    <h1>Welocme</h1>
    <button onClick={display}>Click here</button>

    </>
  )
}
export default App;



// parameter  ---------------------------------------

// const App=()=>{

//   const myname=(nm)=>{
//     alert(`My name is : ${nm}`);
//   }
//   return(
//     <>
//     <h1>Welocme</h1>
//     <button onClick={()=>{myname("Ram")}}>Click here</button>

//     </>
//   )
// }
// export default App;

// Event object -----------------------------------------

// -------   1st -----
// const App=()=>{
//   const display=(nm, e)=>{
//     console.log(e);
//     alert(`Name : ${nm}  Event : ${e.type}`);
//   }
 
//   return(
//     <>
//     <h1>Welocme</h1>
//     <button onClick={(e)=>{display("Raju",e)}} >Click Here</button>
//     </>
//   )
// }
// export default App;

//  -------- 2nd ----------

// const App=()=>{
//   const display=(e)=>{
//     console.log(e);
//     alert("Hello friends Event : "+e.type);
//   }
 
//   return(
//     <>
//     <h1>Welocme</h1>
//     <button onClick={display} >Click Here</button>
//     </>
//   )
// }
// export default App;

// --- 3rd ---

// const App=()=>{
  
//   const myval=(e)=>{
//       let nm=e.target.name;
//       let val=e.target.value;
//       alert("Name : "+nm+" Value : "+val);
//   }
 
//   return(
//     <>
//     <h1>Welocme</h1>
//     <button name="btn" value="mybutton" onClick={myval} >Click Here</button>
//     </>
//   )
// }
// export default App;



// ---------- 4th ----------

// const App=()=>{
  
//   const getval=(e)=>{
//       let nm=e.target.name;
//       let val=e.target.value;
//       console.log({name:nm, value:val});
//   }
//   return(
//     <>
//     <h1>Welocme</h1>
//     <input type="text" name="city" onChange={getval} />
//     </>
//   )
// }
// export default App;

