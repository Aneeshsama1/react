import React, { useState, useEffect } from 'react';

import '../App.css';
import axios from 'axios'
import Banner from './Banner';
import Edit from './edit';



const Main = () => {

    const [games, setGames] = useState([]);
    const [edit, setEdit] = useState();
    const [add, setAdd] = useState();
    const [productId,setProductId]=useState()


    useEffect(() => {

        setEdit(false)
        setAdd(false)


        axios.get("http://localhost/productapi/product").
            then(rep => rep).then(resp => setGames(resp.data)).catch((err) => console.log(err))

    }, [])


    const editProduct=(id)=>{
        setEdit(true);
        setProductId(id);
    }

    const removeProduct=(id)=>{
         
        axios.get(`http://localhost/productapi/product/delete/${id}`).then(()=>alert('data deleted'))
        
        
        axios.get("http://localhost/productapi/product").
            then(rep => rep).then(resp => setGames(resp.data)).catch((err) => console.log(err))
    }

    const addProduct=()=>{
        setEdit(true);
        setAdd(true);

    }


    return (
        <div className='main'>
            
            {edit==true ?
           <Edit productId={productId} add={add}
           setEdit={setEdit} 
           setGames={setGames}/>: 
            <div>
                
               

            <Banner />


            <div className='container'>


                {
                    games.map(n =>
                        <div className='card' key={n.id}>
                           
                            <div className='upper'>  <h3 className='author'>name: {n.name ? n.name.length > 15 ? n.name.substring(0, 15 - 3) + ('...') : n.name :
                                <h4>Unknown</h4>}</h3>
                            </div>
                            <div className='lower'>

                                <h5>price: {n.price}</h5>

                            </div>
                            <div className='btn'>
                                <button onClick={()=>editProduct(n.id)}>edit</button>
                                <button onClick={()=>removeProduct(n.id)}>delete</button>
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