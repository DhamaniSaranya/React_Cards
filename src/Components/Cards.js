import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className='container'>
        <div className="cards-wrapper">
            <div className="card1">
                <h3 className="heading">Team Builder</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src="https://cdn-icons-png.flaticon.com/512/143/143438.png" alt="" className="icon"/>
            </div>
            <div className="card2">
                <h3 className="heading">Karma</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src="https://cdn-icons-png.flaticon.com/512/702/702797.png" alt="" className="icon"/>
            </div>
            <div className="card3">
                <h3 className="heading">Calculator</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src="https://cdn-icons-png.flaticon.com/512/3208/3208484.png" alt="" className="icon"/>
            </div>
            <div className="card4">
                <h3 className="heading">Supervisor</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250364.png" alt="" className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default Cards