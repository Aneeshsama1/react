import React from "react";
import './Details.css';
import { FaHome } from 'react-icons/fa'


const Detail = (props) => {

    return (


        props.individualData ? <div className="detail">
            <div className="Container">

                <h1>{props.individualData.name}</h1>
                <div className="underline"></div>
                <div className="imT">
                    <img src={props.individualData.image} className='image' />
                    <h2>{props.individualData.description}</h2>
                </div>
                
                <FaHome size={50} color='white' className="home" onClick={() => props.setClick(false)} />  </div>

        </div> :

            <div>
                <h1>Gta</h1>
                <h2>Grand Theft Auto (GTA) is a series of action-adventure games created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its parent company, Rockstar Games</h2>
                <h3>8</h3>
            </div>


    )
}

export default Detail;