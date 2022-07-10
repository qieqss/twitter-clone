import React from 'react';

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebar__option && ${active && 'sidebar__option--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;
