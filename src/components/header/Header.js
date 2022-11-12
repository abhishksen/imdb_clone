import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src="https://1000logos.net/wp-content/uploads/2020/08/Imdb-logo.png"></img></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
        </>
    )
}

export default Header;