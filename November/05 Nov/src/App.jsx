//  1st

// const App=()=>{
//   return(
//     <>
//       <h1 style={{color:"red", fontFamily:"verdana"}} >Welcome to bhopal</h1>



//       <div style={{border:"5px solid black" , margin:"100px 0 0 400px", backgroundColor:"yellow", width:"40%", borderRadius:"20px", padding:"50px"}}>
//       <div style={{border:"5px solid black" , margin:"30px", backgroundColor:"aqua",borderRadius:"20px", padding:"40px"}}>
//       <div style={{border:"5px solid black" , margin:"30px", backgroundColor:"greenyellow",borderRadius:"20px", padding:"30px"}}>
//       <h1 style={{textAlign:"center", color:"red"}}>Cybrom</h1>
//       </div>
//       </div>
//       </div>
//     </>
//   )
// }
// export default App;



//  2nd

// const data={
//   color:"red",
//   fontFamily:"verdana",
//   textDecoration:"underline"
// }
// const mydata={
//   color:"blue",
//   fontFamily:"arial",
//   textDecoration:"overline",
//   backgroundColor:"yellow"
// }


// const App=()=>{
//   return(
//     <>
//       <h1 style={data}>Welcome to cybrom bhopal</h1>
//       <h1 style={mydata}>Bhopal the city of lake's</h1>
//     </>
//   )
// }
// export default App;




// 3rd external css

import Bhopal from "./bhopal";

const App=()=>{
  return(
    <>
      <h1 id="mydata">Hello freind's</h1>
      <Bhopal/>
    </>

  )
}
export default App;