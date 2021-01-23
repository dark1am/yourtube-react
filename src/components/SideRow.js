import React from 'react';
import './SideRow.css';

function SideRow( {selected, title, Icon} ) {
    return (
        <div className={`siderow ${selected && 'selected'}`}>
            <Icon className="siderow_icon" />
            <h2 className="siderow_title"> {title} </h2>
            
        </div>
    )
}

export default SideRow
