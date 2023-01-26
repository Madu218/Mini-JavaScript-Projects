import React from "react";

import alone from "../img/image.png";
import c21 from "../img/2-1.png";
import c22 from "../img/2-2.png";
import c31 from "../img/3-1.png";
import c32 from "../img/3-2.png";
import c41 from "../img/4-1.png";
import c42 from "../img/4-2.png";
import c51 from "../img/5-1.png";
import c52 from "../img/5-2.png";

export default function Photos() {
    return (
        <>
            <section className="grid">
                <div className="box1"> <img src={alone}></img> </div>
                <div className="box2-1"> <img src={c21}></img> </div>
                <div className="box2-2"> <img src={c22}></img> </div>
                <div className="box3-1"> <img src={c31}></img> </div>
                <div className="box3-2"> <img src={c32}></img> </div>
                <div className="box4-1"> <img src={c41}></img> </div>
                <div className="box4-2"> <img src={c42}></img> </div>
                <div className="box5-1"> <img src={c51}></img> </div>
                <div className="box5-2"> <img src={c52}></img> </div>
            </section>
            <div className="textos">
                <h1>Online Experiences</h1>
                <p className="join-paragraph">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </>
    );
};