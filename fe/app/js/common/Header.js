import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';


const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
            {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                DT-Platform
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
                <MenuItem to={'/usage'} active={router.isActive('/usage/testusage')}>사용량</MenuItem>
                <MenuItem to={'/Product'} active={router.isActive('/Product')}>부가서비스</MenuItem>
                <MenuItem to={'/Bill'} active={router.isActive('/Bill')}>명세서</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: PropTypes.object
    }

export default Header;