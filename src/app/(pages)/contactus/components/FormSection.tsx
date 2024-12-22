"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { IContactFormValues } from "./types";
import FormikInputField from "@/components/FormikInputField";

const validationSchema = Yup.object({
  name: Yup.string().required("Please fill out this field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please fill out this field"),
  message: Yup.string().required("Please fill out this field"),
});

const FormSection = () => {
  const initialValues: IContactFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = (values: IContactFormValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {() => {
        return (
          <Form>
            <div className="m-6 sm:m-8 flex flex-col gap-5">
              <div className="flex">
                <FormikInputField
                  {...{
                    name: "name",
                    label: "Full name",
                    isRequired: true,
                  }}
                />
              </div>

              <div className="flex">
                <FormikInputField
                  {...{
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    isRequired: true,
                  }}
                />
              </div>

              <div className="flex">
                <FormikInputField
                  {...{
                    name: "message",
                    label: "Message",
                    isRequired: true,
                    isTextarea: true,
                    rows: "10",
                  }}
                />
              </div>

              <button
                type="submit"
                className="bg-white text-dark w-full p-4 rounded-xl text-lg font-bold leading-none"
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSection;
