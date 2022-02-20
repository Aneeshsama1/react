import React,{useState,useEffect} from 'react';
import '../App.css';
import Title from './Header';



const Main=()=>{

    const [news,setNews]=useState([])


    useEffect(async ()=>{

        const data= await fetch("https://api.newscatcherapi.com/v2/search?q=Tesla",{
            headers:{"x-api-key":"CxsA9wCKX9789oAOwE5ITI8ocAasgbpYfahslZ5OL4c"}
        })

        const promiseData= await data.json();
        setNews(promiseData);

    },[])


    return(
    <div className='main'>
        <Title/>

    
    <div className='container'>
        
       
       {news.articles.map(n=>
           <div className='card'>
           <h1>{n.title}</h1>
           </div>)}
    </div>
    </div>)
}
export default Main;