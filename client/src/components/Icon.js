import React from 'react';
import {} from 'open-weather-icons/dist/css/open-weather-icons.css';

const Icon = props => {
  let className = `owi owi-${props.icon}`;
  return <i className={className}></i>
}

export default Icon;