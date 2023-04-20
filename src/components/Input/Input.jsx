import React from "react";
import {func, object, string} from "prop-types";

import {InputWrapper, Label, Input, Error} from "./Input.styles";

export default function InputComponent({
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
  style,
}) {
  return (
    <InputWrapper style={style}>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
}

InputComponent.propTypes = {
  label: string,
  type: string,
  value: string.isRequired,
  error: string,
  onChange: func.isRequired,
  onBlur: func,
  style: object,
};
