import React, { useState, useEffect } from 'react';

import '../App.css';
import Title from './Header';
import axios from 'axios'
import Banner from './Banner';
import Edit from './edit';



const Main = () => {

    const [news, setNews] = useState([]);
    const [edit, setEdit] = useState();
    const [add, setAdd] = useState();
    const [productId,setProductId]=useState()


    useEffect(() => {

        setEdit(false)
        setAdd(false)


        axios.get("http://localhost:2000/products").
            then(rep => rep).then(resp => setNews(resp.data)).catch((err) => console.log(err))

    }, [])


    const editProduct=(id)=>{
        setEdit(true);
        setProductId(id);
    }

    const removeProduct=(id)=>{

        axios.delete(`http://localhost:2000/products/${id}`).then(()=>alert('data deleted'))
    }

    const addProduct=()=>{
        setEdit(true);
        setAdd(true);

    }


    return (
        <div className='main'>
             <Title />
            {edit==true ?
           <Edit productId={productId} add={add}/>: 
            <div>
                
               

            <Banner />


            <div className='container'>


                {
                    news.map(n =>
                        <div className='card' key={n._id}>
                           
                            <div className='upper'>  <h3 className='author'>name: {n.name ? n.name.length > 15 ? n.name.substring(0, 15 - 3) + ('...') : n.name :
                                <h4>Unknown</h4>}</h3>
                            </div>
                            <div className='lower'>

                                <h5>price: {n.price}</h5>

                            </div>
                            <div className='btn'>
                                <button onClick={()=>editProduct(n._id)}>edit</button>
                                <button onClick={()=>removeProduct(n._id)}>delete</button>
                            </div>
                        </div>)

                }

                <div className='card'>
                <div className='upper'>

                    <h3>want to add new product</h3>

                

                    </div><button  onClick={()=>addProduct()}>Add</button>


                </div>

            </div>
                </div>}
        </div>)
}
export default Main;