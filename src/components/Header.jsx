import React from 'react';
function Header({ tag: Tag, text, className }) {
  return (
    <Tag className={className}>{text}</Tag>
  );
}

export default Header;