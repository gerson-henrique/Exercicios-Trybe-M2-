import React from "react";

class AreaTxt extends React.Component {
  render()  {
    const {label,type,limit} = this.props;
   return <div>
    <label>{label}</label> <input required='true' type={type} max={limit}/> 
    </div>
  }
}

export default AreaTxt;

