import React from 'react';
import './Sidebar.css';
import SideRow from './SideRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SideRow selected className="sidebarRow" Icon={HomeIcon} title="Home" />
            <SideRow className="sidebarRow" Icon={WhatshotIcon} title="Trending" />
            <SideRow className="sidebarRow" Icon={SubscriptionIcon} title="Subscriptions" />
            <hr/>
            <SideRow className="sidebarRow" Icon={VideoLibraryIcon} title="Library" />
            <SideRow className="sidebarRow" Icon={HistoryIcon} title="History" />
            <SideRow className="sidebarRow" Icon={OndemandVideoIcon} title="Your videos" />
            <SideRow className="sidebarRow" Icon={WatchLaterIcon} title="Watch later" />
            <SideRow className="sidebarRow" Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SideRow className="sidebarRow" Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr/>
        </div>
    )
}

export default Sidebar
