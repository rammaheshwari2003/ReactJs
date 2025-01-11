import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./nameSlice";
const App=()=>{
   const mynm=useSelector((state)=>state.myname.nm);
   const dispatch= useDispatch();
   return(
      <>
      <h1>Welcome to my app</h1>
      <h2>{mynm}</h2> 
      <button onClick={()=>{dispatch(changeName())}}>Click Here</button>
      </>
   )
}
export default App;
