import React from "react";

export default function Book(props) {

    let color;
    if (props.genre === "children") color = "yellow";
    else if (props.genre === "science fiction") color = "lightgreen";
    else if (props.genre === "novel") color = "lightblue";
    else color = "hotpink";

    return (
        <section className="book-card display-flex">
            <img src={props.cover} alt="book cover" />
            <div className="textos">
                <h1> {props.title} </h1>
                <div className="info">
                    <p> {props.author} </p>
                    <p> {props.publishDate} </p>
                </div>
                <p> {props.description} </p>
            </div>
            <span className="tag" style={{"color": color}}>&#11044;</span>
        </section>
    );
};