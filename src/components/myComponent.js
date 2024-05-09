import React from 'react';
const MyComponent = (props) => {
return(
  <div className="styled-component">
    <div>hola is working fine</div>
    {props.children}
  </div>);
};
export default MyComponent;