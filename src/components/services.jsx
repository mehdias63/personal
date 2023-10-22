import React from "react"
import SerCard from "./SerCard"
import serdata from "./serdata"
import serdatab from "./serdatab"
import UlserCard from "./UlserCard"
import ulserdata from "./ulserdata"
import Button from "./Button"
export default function Services(){
    return(
        <div className="services">
            <div>
                <h1>OUR LATEST FEATURED PROJECTS</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div>
            <ul>
            {ulserdata.map(card => <UlserCard key={card.id} titel={card.titel} /> )}
            </ul>
            </div>
            <div>
                <div className="image">
                {serdata.map(card => <SerCard key={card.id} titel={card.titel} description={card.description} image={card.image} /> )}
                </div>
                <div className="image">
                {serdatab.map(card => <SerCard key={card.id} titel={card.titel} description={card.description} image={card.image} /> )}
                </div>
                <Button size="lg">Load More Items</Button>
            </div>
        </div>
    )
}