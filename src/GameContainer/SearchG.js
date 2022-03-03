import React from 'react';
import { FaStar, FaSearch } from 'react-icons/fa'

const starIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SearchG=(props)=>{

    return(
        <div>
            {
                props.searchGame.map(n =>
                    <div className='card' key={n.id}>

                        <div className='upper'>  <h3 className='author'> {n.name ? n.name.length > 15 ? n.name.substring(0, 15 - 3) + ('...') : n.name :
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
        </div>
    )
}

export default SearchG;