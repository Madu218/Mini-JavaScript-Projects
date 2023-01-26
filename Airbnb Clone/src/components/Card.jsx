import React from "react";

import star from "../icons/star.png";

export default function Card(props) {
    const stars = props.item.stars.toFixed(1);
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={props.item.img} alt=""/>
                    {props.item.status && <div className="overlay">{props.item.status.toUpperCase()}</div>}
                </div>
                <div className="info">
                <div className="star">
                    <img src={star} alt="" />
                    <p>
                        {stars} <span>({props.item.reviewCount}) &#183; {props.item.country}</span>
                    </p>
                </div>
                <p className="title">{props.item.title}</p>
                <p> <span className="bold">From ${props.item.price}</span> / person </p>
            </div>
            </div>
        </>
    );
};