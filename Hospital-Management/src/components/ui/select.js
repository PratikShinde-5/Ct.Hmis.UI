import React from "react";

export const Select = ({ children, className, ...props }) => {
  return (
    <select className={`border rounded p-2 ${className}`} {...props}>
      {children}
    </select>
  );
};

Select.Trigger = ({ children, className, ...props }) => {
  return (
    <div className={`cursor-pointer ${className}`} {...props}>
      {children}
    </div>
  );
};

Select.Value = ({ placeholder }) => {
  return <option value="">{placeholder}</option>;
};

Select.Content = ({ children }) => {
  return <>{children}</>;
};

Select.Item = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
