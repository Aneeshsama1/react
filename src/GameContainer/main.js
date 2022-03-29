import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'
import Banner from './Banner';
import Edit from './edit';
import { FaStar, FaSearch } from 'react-icons/fa'
import SearchG from './SearchG';
import Detail from './Details';



const Main = () => {

    const [games, setGames] = useState([]);
    const [edit, setEdit] = useState();
    const [add, setAdd] = useState();
    const [productId, setProductId] = useState()
    const [btnClass, setbtnClass] = useState('button1')
    const [dltbtnClass, setdltbtnClass] = useState('button1')
    const [addBtn, setAddBtn] = useState('addBtn')
    const [searchGame, setSearchGame] = useState([])
    const [focus,setFocus]=useState();
    const [click,setClick]=useState();
    const [individualData,setIndividualData]=useState();
    const [s_class,setS_Class]=useState();



    useEffect(() => {

        setEdit(false);
        setAdd(false);
        setFocus(false);
        setClick(false);
      setIndividualData();
      setS_Class('searchField');

        axios.get("http://mi-linux.wlv.ac.uk/~2011790/backend/Games").
            then(rep => rep).then(resp => setGames(resp.data)).catch((err) => console.log(err))

    }, [])


    const editProduct = (id) => {
        setEdit(true);
        setAdd(false);
        setProductId(id);
    }

    const removeProduct = (id) => {

        axios.get(`http://mi-linux.wlv.ac.uk/~2011790/backend/Games/deleteGame/${id}`).then(() => alert('data deleted'))


        axios.get("http://mi-linux.wlv.ac.uk/~2011790/backend/Games").
            then(rep => rep).then(resp => setGames(resp.data))
    }

    const addProduct = () => {
        setEdit(true);
        setAdd(true);

    }

    const search=(text)=>{

       setSearchGame(games.filter(i=>i.name.toLowerCase().includes(text.toLowerCase())))
       
    
    }

    const starIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const openPost=(data)=>{
        setClick(true)
        setIndividualData(data);
    }
    return (
        <div className='main'>

           {click===false?
            edit === true ?
                <Edit productId={productId} add={add}
                    setEdit={setEdit}
                    setGames={setGames} /> :
                <div>
                 <Banner/>


                
                    <div className='searchBox'>
                        <input className={s_class} placeholder='search game here' onChange={(evt)=>search(evt.target.value)} onFocus={()=>setFocus(true)}
                       ></input>
                        <FaSearch size={20} color='red' onClick={()=>setS_Class('openSearchField')} />
                    </div>


                     {focus===true ? <SearchG setIndividualData={setIndividualData} click={click} setClick={setClick} searchGame={searchGame}></SearchG>:
                    <div className='container'>


                        {
                            games.map(n =>
                                <div className='card' key={n.id}>

                               
                                    <div className='lower'>
                                      {console.log(n.image)}
                                        
                                        <img src={n.image} style={{marginTop:-120}}></img>
                                        <div className='upper'>  
                                    <h3 className='author'> {n.name ? n.name.length > 15 ? n.name.substring(0, 15 - 3) + ('...') : n.name :
                                        <h4>Unknown</h4>}</h3>
                                    </div>
                                    <h5>price: £{n.price}</h5>
                                        <div style={{ marginTop: 30 }}>
                                            {starIndex.map((a, i) =>

                                                <FaStar key={i} color={i < n.rating ? 'yellow' : 'black'} size={25}
                                                />)} </div>

                                    </div>
                                    <button onClick={()=>openPost(n)} 
                                    style={{backgroundColor:'gainsboro',position:'absolute',marginLeft:-250,marginBottom:330,width:50,height:50,borderRadius:60}}>View</button>
                                    <div className='btn'>
                                        <button onClick={() => editProduct(n.id)} className={btnClass}
                                            onMouseEnter={() => setbtnClass('button1')}
                                            onMouseLeave={() => setbtnClass('button2')}>edit</button>

                                        <button onClick={() => removeProduct(n.id)} className={dltbtnClass}
                                            onMouseEnter={() => setdltbtnClass('button1')}
                                            onMouseLeave={() => setdltbtnClass('button2')}>delete</button>
                                    </div>
                                </div>)

                        }

                        <div className='card'>
                            <div className='upper'>

                                <h3>want to add new product</h3>
                                </div><button onClick={() => addProduct()} className={addBtn}
                                onMouseEnter={() => setAddBtn('addBtn2')}
                                onMouseLeave={() => setAddBtn('addBtn')}>Add</button>


                        </div>

                    </div> }
                </div>:
                <Detail individualData={individualData}/>}
        </div>)
}
export default Main;