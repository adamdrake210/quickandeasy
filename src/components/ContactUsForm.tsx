import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { Button } from "./ui/Button";
import { ControlledTextField } from "./ui/forms/ControlledTextField";

const SERVICE_ID = process.env.emailServiceApi;
const TEMPLATE_ID = process.env.emailTemplateApi;
const USER_ID = process.env.emailUserApi;

type ContactUsFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactUsForm = () => {
  const [isSending, setIsSending] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (formData: ContactUsFormValues) => {
    setIsSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((result) => {
        console.log("emailSuccess: ", result.text);
        Swal.fire({
          icon: "success",
          title: "Zpráva úspěšně odeslána",
          confirmButtonColor: "#009444",
        });
        reset();
        setIsSending(false);
      })
      .catch((err) => {
        console.error("Email Send Error: ", err);
        Swal.fire({
          icon: "error",
          title: "Ach ne! Něco se pokazilo",
          text: err.text,
          confirmButtonColor: "#009444",
        });
        setIsSending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mb-8">
      <ControlledTextField
        name="name"
        label="Jméno"
        control={control}
        rules={{ required: "Jméno je povinné" }}
      />
      <ControlledTextField
        name="email"
        label="Email"
        control={control}
        rules={{ required: "Email je povinné" }}
      />
      <ControlledTextField
        name="subject"
        label="Předmět"
        control={control}
        rules={{ required: "Předmět je povinné" }}
      />

      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{ maxLength: 300, required: "Tehnle field je povinné" }}
        render={({ field, fieldState: { error } }) => (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-2xl font-bold mb-2"
              htmlFor="message"
            >
              Zpráva
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600"
              placeholder="Zpráva..."
              value={field.value}
              onChange={field.onChange}
              rows={8}
            />
            {error && (
              <span className="text-red-600 text-sm">Zpráva je povinné</span>
            )}
          </div>
        )}
      />

      <Button
        type="submit"
        btnText="Odeslat"
        color="primary"
        disabled={isSending}
      />
    </form>
  );
};
