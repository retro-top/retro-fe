import React, { InputHTMLAttributes, memo } from "react";
import Label from "./Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  about?: string;
  alert?: string;
};

const Input: React.FC<InputProps> = memo(({
  label = "",
  about = "",
  alert = "",
  id = label?.toLowerCase().replaceAll(" ", "-"),
  autoComplete = "off",
  ...restProps
}) => (
  <div className="flex flex-col">
    <Label about={about} label={label} htmlFor={id} />
    <input 
      id={id} 
      autoComplete={autoComplete} 
      {...restProps} 
    />
    {alert && <p className="text-red-500 text-xs mt-1">{alert}</p>}
  </div>
));

Input.displayName = 'Input';

export default Input;