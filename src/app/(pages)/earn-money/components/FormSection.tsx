"use client";

import Image from "next/image";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { IFormValues } from "./type";
import FormikInputField from "@/components/FormikInputField";
import QuestionAnswerIcon from "@/assets/icons/QuestionAnswerIcon";
import SubmitIcon from "@/assets/icons/SubmitIcon";
import DiscordOutline from "@/assets/icons/DiscordOutline";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import logo from "../../../../assets/images/askppl-logo.svg";
import FacebookCircleIcon from "@/assets/icons/FacebookCircleIcon";

const validationSchema = Yup.object({
  name: Yup.string().required("Please fill out this field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please fill out this field"),
  username: Yup.string().required("Please fill out this field"),
  answer: Yup.string().required("Please fill out this field"),
});

interface IProps {
  type?: string;
}
const FormSection = (props: IProps) => {
  const {type} = props;

  const [formSubmit, setFormSubmit] = useState<boolean>(false);

  const initialValues: IFormValues = {
    name: "",
    email: "",
    username: "",
    answer: "",
  };

  const handleFormSubmit = (values: IFormValues) => {
    console.log("Form submitted with values:", values);
    setFormSubmit(true);
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
              <div className="flex items-center justify-start gap-2.5 w-full text-white py-5 sm:py-6 px-8 border-b border-gentleFog rounded-t-20 bg-center bg-misty-lagoon-gradient">
                <span>
                  <QuestionAnswerIcon />
                </span>

                <span className="text-base sm:text-xl font-medium">
                  Your Answers
                </span>
              </div>

              {formSubmit ||type==="success"  ? (
                <div className="my-[74px] max-sm:mt-10 max-sm:mb-5 max-w-md mx-auto flex flex-col justify-center items-center">
                  <div className="w-[315px] flex flex-col justify-center items-center">
                    <SubmitIcon />

                    <h3 className="mt-4 sm:mt-6 mb-3 text-2xl sm:text-5xl font-medium text-center">
                      Thank you for your submission!
                    </h3>

                    <p className="font-neueMontreal font-medium text-sm sm:text-base text-offWhite text-center">
                      Your answer has been successfully recorded.
                    </p>
                  </div>

                  <div className="mt-8 sm:mt-[60px] mx-5 rounded-2xl border border-ghostWhite px-8 py-6 flex flex-col gap-5 items-center justify-center bg-darkGray shadow-gray-box-shadow">
                    <div>
                      <Image
                        src={logo}
                        alt="logo"
                        className="sm:w-[121px] w-20"
                      />
                    </div>

                    <div className="max-w-[344px] font-neueMontreal font-medium text-softWhite text-center text-sm sm:text-base">
                      Follow us on social media to stay updated with new
                      questions each week!
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="cursor-pointer">
                        <DiscordOutline />
                      </div>
                      <div className="cursor-pointer">
                        <TwitterIcon />
                      </div>
                      <div className="cursor-pointer">
                        <FacebookCircleIcon />
                      </div>
                      <div className="cursor-pointer">
                        <YoutubeIcon />
                      </div>
                      <div className="cursor-pointer">
                        <LinkedinIcon />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="m-6 sm:m-8 flex flex-col gap-5">
                  <div className="flex gap-5 sm:flex-row flex-col ">
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
                        rows: "10",
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
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSection;
