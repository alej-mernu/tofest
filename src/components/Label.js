import React from "react";

const Label = (props) => {
  return (
    <label {...props} className={props.className ?? ""}>
      {props.children}
    </label>
  );
};

export default Label;
