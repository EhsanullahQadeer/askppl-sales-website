import AlertCircleIcon from "@/assets/icons/AlertCircleIcon";
import PolygonIcon from "@/assets/icons/PolygonIcon";
import { ErrorMessage, Field, useField } from "formik";
import React from "react";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  rows?: string;
  isRequired?: boolean;
  isTextarea?: boolean;
};

const FormikInputField = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    type = "text",
    isRequired,
    isTextarea = false,
    rows,
  } = props;

  const [, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <div className="flex-1 flex flex-col gap-3">
      <label
        htmlFor="name"
        className="text-white text-base sm:text-lg tracking-normal font-medium"
      >
        {label} {isRequired && <span className="text-lightLime">*</span>}
      </label>

      <div className="relative">
        <Field
          name={name}
          placeholder={placeholder}
          type={type}
          as={isTextarea ? "textarea" : "input"}
          {...(rows ? { rows } : {})}
          className={`w-full min-w-72 text-base px-4 py-3 outline-none border focus-within:border-lightLime rounded-xl font-normal text-white bg-transparent resize-none ${
            hasError ? "border-lightLime" : "border-etherealWhite"
          }`}
        />

        <ErrorMessage name={name}>
          {(msg) => (
            <div className="z-50 absolute top-[95%] left-1/2 -translate-x-1/2">
              <div className="px-2">
                <PolygonIcon />
              </div>
              <div className="z-50 text-white text-xs font-normal flex items-center gap-2.5 px-2 py-1 bg-grey rounded-[10px]">
                <span>
                  <AlertCircleIcon />
                </span>
                {msg}
              </div>
            </div>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default FormikInputField;
