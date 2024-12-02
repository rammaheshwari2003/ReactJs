import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
    const [mydata, setMydata]=useState({});
    const {id}=useParams();
    const loadData=()=>{
        let api=`http://localhost:3000/Books/${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values, [name]:value}));
    }

    const handleSubmit=()=>{
        let api=`http://localhost:3000/Books/${id}`;
        axios.put(api, mydata).then((res)=>{
            message.success("Data Successfully Updated");
        })

    }
    return(
        <>
        <h1>Update Your Record :</h1>
        Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
         <br />
        Edit Price : <input type="text" name="price" value={mydata.price} onChange={handleInput}/> 
        <br />
        Edit Author Name : <input type="text" name="author_name" value={mydata.author_name} onChange={handleInput}/>
         <br />
        Edit Publish Year : <input type="text" name="publish_year" value={mydata.publish_year} onChange={handleInput}/> 
        <br />
        <button onClick={handleSubmit}>Update Save</button>
        
        </>
    )
}
export default Edit;
