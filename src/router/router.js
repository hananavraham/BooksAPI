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
            <Route exact path="/2017-2018/dcs/dev_36/client_app/getAllBooks" component={BooksList} />
            <Route path="/2017-2018/dcs/dev_36/client_app/getBooksByID" component={BookByID} />
            <Route path="/2017-2018/dcs/dev_36/client_app/getBooksByPrice" component={BookByPrice} />
        </React.Fragment>
    );}

export default ReactRouter;
