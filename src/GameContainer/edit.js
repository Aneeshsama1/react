import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import './edit.css'
import axios from 'axios';
import {FaBackward ,FaImage} from 'react-icons/fa';


const Edit=(props)=>{
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    const [price,setPrice]=useState();
    const [rating,setRating]=useState();
    const [color,setColor]=useState('gainsboro');
    const [image,setImage]=useState();


const updateProduct=(id)=>{

    const product={
        name: name,
        description: description,
        price: price,
        rating:rating,
        image:image
      
    }
    axios.post(`http://mi-linux.wlv.ac.uk/~2011790/backend/Games/updateGame/${id}`,product).
    then(()=>alert('data updated'))

    
}

const home=()=>{
    props.setEdit(false)

    axios.get("http://mi-linux.wlv.ac.uk/~2011790/backend/Games").
            then(rep => rep).then(resp => props.setGames(resp.data)).catch((err) => console.log(err))


}

const AddProduct=()=>{
    const product={
        name: name,
        description: description,
        price: price,
        rating:rating,
        image: image
    }
  
     axios.post(`http://mi-linux.wlv.ac.uk/~2011790/backend/Games/addGame`,product).then(()=>alert('data added'))
}


    return( <div style={{backgroundColor:'thistle'}}>
    <FaBackward onClick={()=>home()} size={80} color={color} onMouseLeave={()=>setColor('gainsboro')} onMouseEnter={()=>setColor('blue')}/>
      { props.add==true ?
       <div className='edit'>
          
       <div className='card'>
       
   <input placeholder='product name' className='name' onChange={(env)=>setName(env.target.value)}></input>
   <input placeholder='description' className='name' onChange={(env)=>setDescription(env.target.value)}></input>
   <input placeholder='price' className='name' onChange={(env)=>setPrice(env.target.value)}></input>
   <input placeholder='rating' className='name' onChange={(env)=>setRating(env.target.value)}></input>
   {/* <input type='file' onChange={(evt)=>setImage(evt.target.files[0])}></input> */}
   <input placeholder='image url' className='name' onChange={(env)=>setImage(env.target.value)}></input>
   <Button onClick={()=>AddProduct()}>Add</Button>
   
   </div>
 </div>:

<div className='edit'>
<div className='card'>
<input placeholder='product name' className='name' onChange={(env)=>setName(env.target.value)}></input>
<input placeholder='description' className='name' onChange={(env)=>setDescription(env.target.value)}></input>
<input placeholder='price' className='name' onChange={(env)=>setPrice(env.target.value)}></input>
<input placeholder='rating' className='name' onChange={(env)=>setRating(env.target.value)}></input>
<input placeholder='image url' className='name' onChange={(env)=>setImage(env.target.value)}></input>
<Button onClick={()=>updateProduct(props.productId)}>Edit</Button>

</div>
</div>
 
      }</div>)
}
export default Edit;