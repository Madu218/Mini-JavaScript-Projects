import React from "react";

import Nav from "./components/Nav.jsx";
import Photos from "./components/Photos.jsx";
import Card from "./components/Card.jsx";
import Data from "./components/Data";

export default function App() {

    const cards = Data.map(instance => {
        return (
            <Card 
                key={instance.id}
                item={instance}
                //{...item}
            />
        );
    });

    return (
        <>
            <Nav />
            <Photos />
            <section className="slider">
                {cards}
            </section>
        </>
    );
};