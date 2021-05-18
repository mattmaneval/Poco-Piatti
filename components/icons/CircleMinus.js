import React from 'react';
import PropTypes from 'prop-types';

const CircleMinus = ({ collapsed }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={collapsed ? 'collapsed' : 'expanded'}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

CircleMinus.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default CircleMinus;
