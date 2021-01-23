import React from 'react';
import './RecommendedVideos.css';
import Video from './Video';

function RecommendedVideos() {
    return (
        <div className="recommended">
            <h2>Recommended</h2>
            <div className="videos"></div>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}

export default RecommendedVideos
