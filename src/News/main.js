import React,{useState,useEffect} from 'react';
import '../App.css';
import Title from './Header';
import axios from 'axios'



const Main=()=>{

    const [news,setNews]=useState([])

   
    useEffect(()=>{


        axios.get("https://api.newscatcherapi.com/v2/search?q=Tesla",{
            headers:{"x-api-key":"CxsA9wCKX9789oAOwE5ITI8ocAasgbpYfahslZ5OL4c"}}).
            then(rep=>rep).then(resp=>setNews(resp.data.articles)).catch((err)=>console.log(err))

    },[])


    return(
    <div className='main'>
        <Title/>

    
    <div className='container'>
        
       
        { 
       news.map(n=>
            <div className='card'>
                {console.log(n)}
         <div className='upper'>  <h3 className='author'>Author: {n.author ? n.author.length>15 ? n.author.substring(0,15-3)+('...'):n.author:
           <h4>Unknown</h4>}</h3>
           </div>
           <div className='lower'>

           <h5>Rank: {n.rank}</h5>
           
           </div>
           <div className='btn'>
           <button>edit</button>
           <button>delete</button>
               </div>
            </div>)
    
           } 
    </div>
    </div>)
}
export default Main;