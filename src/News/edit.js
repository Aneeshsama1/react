import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import './edit.css'
import axios from 'axios';


const Edit=(props)=>{
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    const [price,setPrice]=useState();


const updateProduct=(id)=>{

    const product={
        name: name,
        description: description,
        price: price
    }
    axios.put(`http://localhost:2000/products/${id}`,product).then(()=>alert('data updated'))

    
}

const AddProduct=()=>{
    const product={
        name: name,
        description: description,
        price: price
    }

    axios.post(`http://localhost:2000/products`,product).then(()=>alert('data added'))
}


    return(
       props.add==true ?
       <div className='edit'>
       <div className='card'>
   <input placeholder='product name' className='name' onChange={(env)=>setName(env.target.value)}></input>
   <input placeholder='description' className='name' onChange={(env)=>setDescription(env.target.value)}></input>
   <input placeholder='price' className='name' onChange={(env)=>setPrice(env.target.value)}></input>
   <Button onClick={()=>AddProduct()}>Add</Button>
   
   </div>
 </div>:

<div className='edit'>
<div className='card'>
<input placeholder='product name' className='name' onChange={(env)=>setName(env.target.value)}></input>
<input placeholder='description' className='name' onChange={(env)=>setDescription(env.target.value)}></input>
<input placeholder='price' className='name' onChange={(env)=>setPrice(env.target.value)}></input>
<Button onClick={()=>updateProduct(props.productId)}>Edit</Button>

</div>
</div>
 
    )
}
export default Edit;