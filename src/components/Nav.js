import React, { useState } from 'react';
import Youtube from '../yt-logo.png';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav(){

    const [inputSearch, setInputSearch] = useState('');

    return (
        <nav>
            <div className="logo">
                <i class="fas fa-bars"></i>
                <div className="thelogo">
                    <Link to="/home">
                    <img src={ Youtube } alt=""/>
                    </Link>
                    <h5>AR</h5>
                </div>
            </div>

            <div className="search">
                <div className="search-bar">
                    <input 
                    onChange={(e) => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                    />
                    <Link to={`/search/${inputSearch}`}>
                        <i class="fas fa-search"></i>
                    </Link>
                </div>
                <i class="fas fa-microphone"></i>
            </div>

            <div className="buttons">
                <i class="fas fa-th"></i>
                <i class="fas fa-ellipsis-v"></i>
                <div className="sign-btn">
                    <i class="fas fa-user-circle"></i>
                    <h2>sign in</h2>
                </div>
            </div>
        </nav>
    )
}

export default Nav;