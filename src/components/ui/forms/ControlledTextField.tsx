import React from "react";
import { Control, Controller } from "react-hook-form";

type TextFieldProps = {
  name: string;
  label: string;
  rules: any;
  control: Control<any>;
  type?: string;
};

export const ControlledTextField = ({
  name,
  label,
  rules,
  control,
  type,
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            htmlFor={name}
          >
            {label}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600"
            id={name}
            type={type || "text"}
            placeholder={label}
            value={field.value}
            onChange={field.onChange}
          />
          {error && (
            <span className="text-red-600 text-sm">{rules.required}</span>
          )}
        </div>
      )}
    />
  );
};
