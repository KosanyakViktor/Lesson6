import React from "react";

// input: (props): number
// output: JSX
const Spinner = props => {
  return (
    <span className="spinner" style={{height: props.size, width: props.size}}></span>
  )
}
export default Spinner;