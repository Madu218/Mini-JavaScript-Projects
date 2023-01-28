import React from "react";

import book from "../icons/book.png";

export default function Nav() {
    return (
        <nav className="display-flex">
            <div className=" page-title display-flex">
                <img src={book} alt="book icon"/>
                My Book List
                <div className="overlay">
                    <p>Tags:</p>
                    <p><span className="novel">&#11044;</span> Novel</p>
                    <p><span className="children">&#11044;</span> Children</p>
                    <p><span className="scfi">&#11044;</span> Science Fiction</p>
                    <p><span className="others">&#11044;</span> Others</p>
                </div>
            </div>
        </nav>
    );
};