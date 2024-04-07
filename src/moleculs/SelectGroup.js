import * as React from "react";

export const SelectGroup = ({ onChange, selected, children }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  const clonedOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      isSelected: child.props.value === selected,
      onChange: handleSelectChange,
    });
  });

  return (
    <div className="selectGroup">
      <select
        value={selected}
        onChange={handleSelectChange}
        className="form-select  form-select-sm mt-3"
      >
        {clonedOptions}
      </select>
    </div>
  );
};

export const SelectOption = ({ value, isSelected, children, onChange }) => {
  return (
    <option value={value} selected={isSelected} onChange={onChange}>
      {children}
    </option>
  );
};
