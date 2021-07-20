import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/hexagone.png"

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{color: 'white'}}>
                <img src={logo}  alt="logo" 
                    style={{ maxWidth: 70,
                    backgroundImage: 'url(../assets/images/banner.jpg)'}}/>
                <Link to="/" className="navbar-brand" href="#">SDH</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/user" className="nav-link" href="#">Créer son utilisateur</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link" href="#">Journal d'activité</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
