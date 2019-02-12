import React from 'react';



const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                DT-Platform
            </div>
            <div className="menu">
                <MenuItem>bill</MenuItem>
                <MenuItem>Usage</MenuItem>
                <MenuItem>Product</MenuItem>
            </div>
        </div>
    );
};

export default Header;


