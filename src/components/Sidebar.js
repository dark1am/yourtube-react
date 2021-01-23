import React from 'react';
import './Sidebar.css';
import SideRow from './SideRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
    return (
        <div className="sidebar">
            <SideRow selected className="sidebarRow" Icon={HomeIcon} title="Home" />
            <SideRow className="sidebarRow" Icon={WhatshotIcon} title="Trending" />
            <SideRow className="sidebarRow" Icon={SubscriptionIcon} title="Subscriptions" />
            <hr/>
        </div>
    )
}

export default Sidebar
