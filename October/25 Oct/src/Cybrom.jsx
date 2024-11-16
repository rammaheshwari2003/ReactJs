//                 // props={nm,cl,clg}
// const Cybrom=({nm,cl,clg})=>{
//     // console.log({nm,cl,clg});
//     return(
//         <>
//         <h1>My College name : {clg}</h1>
//         <h2>My name is : {nm} </h2>
//         <h3>My class is : {cl} </h3>
//         </>
//     )
// }
// export default Cybrom;

// // children is keyword


const Cybrom=({name,city,children})=>{
    return(
        <>
            {children}
            <h1 style={{color:"red"}}>Welcome this is Cybrom component</h1>
            <h1>Name : {name} </h1>
            <h1>City : {city} </h1>
            <h4 style={{backgroundColor: "red"}}>{children}</h4>
        </>
    )
}
export default Cybrom;