import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
    const [mydata, setMydata]=useState({});
    const {id}=useParams();
    const loadData=()=>{
        let api="http://localhost:3000/Books";
        
    }
    return(
        <>
        
        </>
    )
}
export default Edit;