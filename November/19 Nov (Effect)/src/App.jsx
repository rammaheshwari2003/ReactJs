import { useState, useEffect } from "react";

// --------- 1st -----------
// const App=()=>{

//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(() => {
//             setCount(count+1);
//         }, 2000);
//     })

//     return (
//         <>
//             <h1>My counter : {count}</h1>
//         </>
//     )
// }
// export default App;

//-------- 2nd -----------   un-dependency
// const App=()=>{

//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(() => {
//             setCount(count+1);
//         }, 2000);
//     }, [])

//     return (
//         <>
//             <h1>My counter : {count}</h1>
//         </>
//     )
// }
// export default App;


// ------- 3rd ----------   Dependency

// const App=()=>{

//     const [cnt,setCnt]=useState(0);
//    const [multi,setMulti]=useState(0);
//    const myCounter=()=>{
//             setCnt(cnt+1);
//    }

//    useEffect(()=>{
//     setMulti(cnt*2);
//    },[cnt])

//     return (
//         <>
//             <h1>My counter : {cnt}</h1>
//             <h2>Multiplication : {multi}</h2>
//             <button onClick={myCounter}>Click</button>
//         </>
//     )
// }
// export default App;




//  --------- Live API --------

import axios from "axios";

const App=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="https://jsonplaceholder.org/comments";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res);
        });
    }
    
    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.id}</td>
                <td>{key.postId}</td>
                <td>{key.userId}</td>
                <td>{key.comment}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Live Api data</h1>
        <table border={2}>
            <tr>
                <th>ID</th>
                <th>PostID</th>
                <th>UserID</th>
                <th>Comments</th>
            </tr>
            {ans}
        </table>

        </>
    )
}
export default App;