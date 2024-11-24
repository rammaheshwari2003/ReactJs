import Com2 from "./Com-2";
const Com1=({user})=>{
    return(
        <>
        <h1>Component - 1</h1>
        <Com2 user={user}/>
        </>
    )
}

export default Com1;