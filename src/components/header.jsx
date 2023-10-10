import React from "react";
export default function Header(){
    return(
        <section className="header">
            <div className="head">
            <div>
            <h2 className="title">MEETME</h2>
            </div>
            <div className="menu">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#pages">PAGES</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        </div>
        </div>
        <div className="info">
        <img src="../images/5934.JPG" />
        <div>
            <h1>hello</h1>
        </div>
        </div>
            </section>
    )
}