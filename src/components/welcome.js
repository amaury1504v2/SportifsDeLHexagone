import React from 'react'
import './welcome.css'
import Exercises from './exercises-list'
import { Link } from 'react-router-dom';

const welcome = () => {
    return (
            <div className="banner" alt="banner">
                <div className="container" 
                style={{display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                    <div className="cardwelcome">
                        <h2>Bienvenue parmi les sportifs de l'hexagone</h2>
                        <p>C'est ici que pourrez vous référer aux nombreux sportifs du territoire français</p>
                        <h3>Comment je m'inscris ?</h3>
                        <p>Il suffit de <Link to="/user" className="nav-link" href="#">créer son utilisateur</Link>
                         puis ensuite ajouter son <Link to="/create" className="nav-link" href="#">journal d'activité</Link></p>
                    </div>

                    <br/>

                    <div className="cardlist">
                        <Exercises />
                    </div>
                </div>        
            </div>
        
    )
}

export default welcome

