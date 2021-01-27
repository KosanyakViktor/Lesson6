import React from "react";

const Logout = () => {
  return (
    <button className="logout btn" onClick = {props.onLogout}>Logout</button>
  )
};

export default Logout;