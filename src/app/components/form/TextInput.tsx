import { FieldHookConfig, useField } from "formik";
import { FC, ClassAttributes, InputHTMLAttributes } from "react";
import FormGroup from "./FormGroup";

interface InputProps {
  label: string;
}

const TextInput: FC<
  ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    FieldHookConfig<string> &
    InputProps
> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <label className="text-sm font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="bg-transparent outline outline-1 outline-gray-500 rounded-sm mt-2 p-2 text-gray-300"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="visible text-sm text-red-500">{meta.error}</p>
      ) : (
        <p className="invisible text-sm text-red-500">error message</p>
      )}
    </FormGroup>
  );
};

export default TextInput;
