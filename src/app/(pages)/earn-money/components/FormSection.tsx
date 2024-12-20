"use client";

import QuestionAnswerIcon from "@/assets/icons/QuestionAnswerIcon";
import FormikInputField from "@/components/FormikInputField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { IFormValues } from "./type";

const validationSchema = Yup.object({
  name: Yup.string().required("Please fill out this field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please fill out this field"),
  username: Yup.string().required("Please fill out this field"),
  answer: Yup.string().required("Please fill out this field"),
});

const FormSection = () => {
  const initialValues : IFormValues = {
    name: "",
    email: "",
    username: "",
    answer: "",
  };

  const handleFormSubmit = (values: IFormValues) => {
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
            <div className="rounded-20 border border-ghostWhite bg-midnightAsh mt-5">
              <div
                style={{ background: "rgba(255, 255, 255, 0.00)" }}
                className="flex items-center justify-start gap-2.5 w-full text-white py-6 px-8 border-b border-gentleFog"
              >
                <span>
                  <QuestionAnswerIcon />
                </span>

                <span className="text-xl font-medium">Your Answers</span>
              </div>

              <div className="m-8 flex flex-col gap-5">
                <div className="flex gap-5">
                  <FormikInputField
                    {...{
                      name: "name",
                      label: "Full name",
                      placeholder: "Enter your name",
                      isRequired: true,
                    }}
                  />

                  <FormikInputField
                    {...{
                      name: "email",
                      label: "Email address",
                      placeholder: "example@domain.com",
                      type: "email",
                      isRequired: true,
                    }}
                  />
                </div>

                <div>
                  <FormikInputField
                    {...{
                      name: "username",
                      label: "ASKPPL username",
                      placeholder: "Enter username",
                      isRequired: true,
                    }}
                  />

                  <p className="mt-3 text-xs font-normal text-smokeGray">
                    You must have a human verified account for a valid
                    submission
                  </p>
                </div>

                <div className="flex gap-5">
                  <FormikInputField
                    {...{
                      name: "answer",
                      label: "Your answer",
                      placeholder: "Type your answer..",
                      isRequired: true,
                      isTextarea: true,
                      rows: "10"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black w-full p-4 rounded-xl text-lg font-bold leading-none"
                >
                  Submit & Enter to Win
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSection;
