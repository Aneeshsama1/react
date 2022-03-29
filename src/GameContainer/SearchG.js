import React from 'react';
import { FaStar, FaSearch } from 'react-icons/fa'
import Detail from './Details';
import './search.css';

const starIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SearchG=(props)=>{


    const store=(data)=>{
        props.setClick(true)
        props.setIndividualData(data)
    }
    return(
       props.click===false? 
       <div style={{display:'flex',flexDirection:'row', backgroundColor:'gainsboro',height:'100%',width:'100%'}}>
       {

           props.searchGame.map(n =>
               <div onClick={()=>store(n)} style={{backgroundColor:'thistle'}} className='card' key={n.id} >

                   <div className='upper' >  <h3 className='author'> {n.name ? n.name.length > 15 ? n.name.substring(0, 15 - 3) + ('...') : n.name :
                       <h4>Unknown</h4>}</h3>
                   </div>
                   <div className='lower'>

                       <h5>price: £{n.price}</h5>
                       <div style={{ marginTop: 30 }}>
                           {starIndex.map((a, i) =>

                               <FaStar color={i < n.rating ? 'yellow' : 'black'} size={25}
                               />)} </div>

                   </div>
                   
               </div>)
       }

       
   </div>: 
   <Detail/>
    )
}

export default SearchG;