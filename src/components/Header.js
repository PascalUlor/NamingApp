import React from 'react';
import PropTypes from 'prop-types';

const color = Math.random() > 0.5? 'green' : 'red';

const Header = ({message}) => {
    return (
    <h2 className="text-center" style={{color: color}}>
        {message}
    </h2>
    );
};

Header.propTypes = {
    message: PropTypes.string
};

export default Header;