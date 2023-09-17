import { useState, ChangeEvent } from "react";

type Model = {
  [key: string]: string;
};

type FormHook<ModelType extends Model> = {
  values: ModelType;
  setValues: React.Dispatch<React.SetStateAction<ModelType>>;
  errors: Record<keyof ModelType, string>;
  setErrors: React.Dispatch<
    React.SetStateAction<Record<keyof ModelType, string>>
  >;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function useForm<ModelType extends Model>(
  getFreshModelObject: () => ModelType
): FormHook<ModelType> {
  const [values, setValues] = useState<ModelType>(getFreshModelObject());
  const [errors, setErrors] = useState<Record<keyof ModelType, string>>(
    getFreshModelObject()
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}
