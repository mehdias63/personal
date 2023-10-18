import React from "react"
import SerCard from "./SerCard"
import serdata from "./serdata"
import serdatab from "./serdatab"
export default function Services(){
    return(
        <div className="services">
            <div>
                <h1>OUR LATEST FEATURED PROJECTS</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div>
            <ul>
            <li><a href="#all" className="blue">ALL</a></li>
            <li><a href="#vector">VECTOR</a></li>
            <li><a href="#raster">RASTER</a></li>
            <li><a href="#ui/ux">UI/UX</a></li>
            <li><a href="#printing">PRINTING</a></li>
            </ul>
            </div>
            <div>
                <div className="image">
                {serdata.map(card => <SerCard key={card.id} titel={card.titel} description={card.description} image={card.image} /> )}
                </div>
                <div className="image">
                {serdatab.map(card => <SerCard key={card.id} titel={card.titel} description={card.description} image={card.image} /> )}
                </div>
                <button>Load More Items</button>
            </div>
        </div>
    )
}