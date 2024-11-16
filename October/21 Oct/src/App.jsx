import React from "react";

const name="Ram";
const age=21;

// Multiple line   21-10-2024
const sub=<ol>
              <li>PHP</li>
              <li>JAVA</li>
              <li>PYTHON</li>
              <li>HTML</li>
              <li>CSS</li>
          </ol>

const App=()=>{
  return(
    // 1st
    // <h1> Welcome to bhopal {name} we are web developer age {age*3}  </h1>

    // 2nd
    <h1>Our computer subjects are : {sub} </h1>

    // No Extra Node
    //  <>    
    //  </>
  
  )
}

export default App; 

