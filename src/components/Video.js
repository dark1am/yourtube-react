import React from 'react';
import './Video.css';
import Avatar from '@material-ui/core/Avatar';

function Video({ image, channelImage, url, title, views, timestamp, channel }) {
    return (
        <div className="videoCard"> 
            <img src={ image } alt=""/>
            <div className="videoInfo"></div>
            <Avatar 
                className="cardAvatar" 
                src={channelImage} 
                alt={channel} 
            />
            
        </div>
    )
}

export default Video
