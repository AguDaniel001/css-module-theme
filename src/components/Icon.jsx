import React from 'react';
function Icon({ icon, className }) { 
  return (
    <i className={className}>
      {icon}
    </i>
  );
}

export default Icon;
