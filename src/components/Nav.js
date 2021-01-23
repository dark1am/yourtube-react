import React from 'react';
import Youtube from '../yt-logo.png';
import './Nav.css';

function Nav(){
    return (
        <nav>
            <div className="logo">
                <i class="fas fa-bars"></i>
                <div className="thelogo">
                    <img src={ Youtube } alt=""/>
                    <h5>AR</h5>
                </div>
            </div>

            <div className="search">
                <div className="search-bar">
                    <input placeholder="Search" type="text"/>
                    <i class="fas fa-search"></i>
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