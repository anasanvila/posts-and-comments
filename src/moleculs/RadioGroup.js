import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    console.log("selected", selected);
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  const inputProps = {
    id: value,
    type: "radio",
    name: value,
    value,
    checked,
    onChange: (e) => {
      onChange(e.target.value);
    },
  };
  return (
    <div className="RadioOption">
      <input {...inputProps} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
