import React from "react";

import Nav from "./components/Nav";
import Book from "./components/Book";
import Data from "./components/Data";

export default function App() {

    const livros = Data.map(item => {
        console.log(<Book />);
        return (
            <Book 
                key = {item.id}
                {...item}
            />
        );
    });

    return (
        <div className="display-flex turu">
            <Nav />
            <main className="books-display display-flex">
                {livros}
            </main>
        </div>
    );
};