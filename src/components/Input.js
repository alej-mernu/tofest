import React from "react";

const Input = (props) => {
  const createInput = (props) => {
    switch (props.input) {
      case "input": {
        return (
          <input
            id={props?.id}
            name={props?.name}
            type={props?.type}
            className={"border " + (props.className ?? "")}
            placeholder={props?.placeholder}
            icon={props?.icon}
            value={props?.value}
          />
        );
      }
      case "select": {
        return (
          <select
            id={props.id}
            name={props.name}
            className={"border text-gray-500" + (props.className ?? "")}
            onChange={""}
            value={props?.value}
          >
            {props.options.map((type) => (
              <option value={type.value} key={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        );
      }
<<<<<<< HEAD
      case "textarea":{
=======
      case "textarea":
>>>>>>> 9bebc7c730728eb25533e006f542aa951ba369d6
        return (
          <textarea
            id={props.id}
            rows={props.rows || 3}
            cols={props.cols || 40}
            className={"border " + (props.className ?? "")}
            onChange={""}
            onBlur={""}
            value={props.value}
          />
        );
<<<<<<< HEAD
      }
      default:{
        return (
          <input
            id={props?.id}
            name={props?.name}
            type={props?.type}
            className={"border " + (props.className ?? "")}
            placeholder={props?.placeholder}
            icon={props?.icon}
            value={props?.value}
          />
        );
      }
=======
>>>>>>> 9bebc7c730728eb25533e006f542aa951ba369d6
    }
  };

  return <div>{createInput(props)}</div>;
};

export default Input;
