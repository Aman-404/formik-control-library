import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const TextArea = (props) => {
  const { label, name, ...rest } = props;
  console.log(rest);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
