import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd';
const Insert=()=>{
        const [input, setInput]=useState([]);

        const handleInput=(e)=>{
            let name=e.target.name;
            let value=e.target.value;

            setInput(values=>({...values,[name]:value}));
        console.log(input);

        }

        const handleSubmit=()=>{
            let api="http://localhost:3000/Books";
            axios.post(api,input).then((res)=>{
                message.success("Book Inserted Successfully");
            });
        }

    return(
        <>

    
        <Form style={{ paddingLeft:"35%",paddingRight:"35%", backgroundColor:"red"}}>
        <h1>Insert Books</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
       
        <Form.Label>Enter Book Price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput}/>
      
        <Form.Label>Enter Author Name</Form.Label>
        <Form.Control type="text" name="author_name" value={input.author_name} onChange={handleInput}/>
     
        <Form.Label>Enter Book Publish Year</Form.Label>
        <Form.Control type="text" name="publish_year" value={input.publish_year} onChange={handleInput}/>
        
      </Form.Group>

     
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  


        </>
    )
}
export default Insert;