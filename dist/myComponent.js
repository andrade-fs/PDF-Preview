import React from 'react';
const MyComponent = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "styled-component"
  }, /*#__PURE__*/React.createElement("div", null, "hola is working fine"), props.children);
};
export default MyComponent;