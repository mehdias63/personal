import React from "react"
import OrCard from "./OrCard"
import ordata from "./ordata"
export default function Order(){
    return(
        <div className="order" id="contact">
        <h1>TESTIMONIALS</h1>
        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
        <div className="data">
                {ordata.map(card => <OrCard key={card.titel} titel={card.titel} text={card.text} icon={card.icon} /> )}
        </div>
    </div>
    )
}