import React from "react"
import { BiCoinStack } from "react-icons/bi";
import { PiBook } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
export default function About(){
    return(
        <section className="about">
            <section>
            <div data-leftside>
                <h3> ABOUT MYSELF </h3>
                <p>
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
                    </p>
                    <div className="data-first">
                    <div className="data-second">
                        <span><BiCoinStack /></span>
                        <h1>$2.5M</h1>
                        <h4>Total Donation</h4>
                    </div>
                    <div className="data-second">
                        <span><PiBook /></span>
                        <h1>1465</h1>
                        <h4>Total Projects</h4>
                    </div>
                    <div className="data-second">
                        <span><IoPeopleOutline /></span>
                        <h1>3965</h1>
                        <h4>Total Volunteers</h4>
                    </div>
                    </div>
                    </div>
                <div data-rightside>
                <progress max="100" value="85" data-a>a 85%</progress>
                <p>After Effects 85%</p>
                <progress max="100" value="90" data-b>b 90%</progress>
                <p>Photoshop 90%</p>
                <progress max="100" value="70" data-c>c 70%</progress>
                <p>Illustrator 70%</p>
                <progress max="100" value="95" data-d>d 95%</progress>
                <p>Sublime 95%</p>
                <progress max="100" value="75" data-e>e 75%</progress>
                <p>Sketch 75%</p>
            </div>
            </section>
            </section>
            )
    }