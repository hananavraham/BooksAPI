import React from "react";
import { Route } from "react-router-dom";
import BooksList from "../Components/BooksList";
import BookByID from "../Components/BookByID";
import BookByPrice from "../Components/BookByPrice";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/getAllBooks" component={BooksList} />
            <Route path="/getBooksByID" component={BookByID} />
            <Route path="/getBooksByPrice" component={BookByPrice} />
        </React.Fragment>
    );}

export default ReactRouter;
