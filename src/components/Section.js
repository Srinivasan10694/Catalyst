import React from 'react'
import background from'../components/background.png'
import '../components/Section.css'
export const Section = () => {
    return (
        <div className="container1">
            <img className="img" src={background} alt=""/>
            <div className="carousel-caption">
              <h1 className="position-static">We are handcrafting unique design & digital experiences to surprise you !!.</h1>
            </div>
          
        </div>
    )
}
