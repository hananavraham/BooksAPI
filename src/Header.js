import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/2017-2018/dcs/dev_36/client_app/getAllBooks" activeStyle={this.active}>
                GetAllBooks
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_36/client_app/getBooksByID" activeStyle={this.active}>
                Get Book By ID
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_36/client_app/getBooksByPrice" activeStyle={this.active}>
                Get Book By Price
                </NavLink>
            </div>
);}}
export default Header;