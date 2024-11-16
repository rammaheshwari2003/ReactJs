// // import College from "./College"
// import Cybrom from "./Cybrom";

// const App=()=>{
//   return(
//     <>
//     {/* <h1>Welcome</h1> */}
//     {/* <College nm="Ram" ct="Bhopal" /> */}


//     <Cybrom nm="Ram" cl="B-tech" clg="Nri" />
//     </>
//   )
// }
// export default App;


import Cybrom from "./Cybrom"

const App=()=>{
  return(
    <>
        <h1>Welcome</h1>
        <Cybrom name="Ram" city="ujjain">
          <h2>Happy Diwali</h2>
          This is app Data
        
    </Cybrom>
    </>
  )
}
export default App;