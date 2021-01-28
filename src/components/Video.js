import React from 'react';
import './Video.css';
import Avatar from '@material-ui/core/Avatar';

function Video({ image, channelImage, title, views, timestamp, channel }) {
    return (
        <div className="videoCard"> 
            <img className="thumbnail" src={ image } alt=""/>
            <div className="videoInfo">
                <Avatar 
                    className="cardAvatar" 
                    src={channelImage} 
                    alt={channel} 
                />
                <div className="cardText">
                    <h4>{title}</h4>
                    <p class="channel">{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
