import React from 'react';
import { RiLightbulbFill, RiLightbulbLine } from 'react-icons/ri';

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkTheme ? (
        <RiLightbulbFill style={{ color: 'gold', marginRight: '5px' }} />
      ) : (
        <RiLightbulbLine style={{ color: 'black', marginRight: '5px' }} />
      )}
    </button>
  );
};

export default ThemeToggle;