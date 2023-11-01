import React from "react";
import HeadCard from "./HeadCard";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import headata from "./headata";
export default function Header(){
    return(
        <section className="header" id="home" >
            <div className="head " >
            <div>
            <h2 className="title">MEETME</h2>
            </div>
             <div className="menu ">
             <label htmlFor="hamburger-menu"><GiHamburgerMenu /></label>
            <input type="checkbox" id="hamburger-menu" />
            <nav>
            <ul>
            {headata.map(card => < HeadCard key={card.id} titel={card.titel} id={card.id} /> )}
        </ul>
        </nav>
        </div>
        </div>
        <div className="info">
        <img src="../images/5934.JPG" />
        <div>
            <p>HELLO EVERYBDY, I AM</p>
            <h1>MEHDI ASADI</h1>
            <h4>JUNIOR UI/UX DEVELOPER</h4>
            <p className="second">You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
            <span><i><HiOutlineCalendarDays /></i>23st December, 1984</span>
            <span><i><FiPhone /></i>44 (012) 6954 783</span>
            <span><i><AiOutlineMail /></i>businessplan@donald</span>
            <span><i><AiOutlineHome /></i>Santa monica bullevard</span>
            <div>
                <span><i><LuFacebook /></i></span>
                <span><i><SlSocialTwitter /></i></span>
                <span><i><SlSocialLinkedin /></i></span>
            </div>
        </div>
        </div>
            </section>
    )
}