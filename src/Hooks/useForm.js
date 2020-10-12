import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(inputs));
  };

  const handleInputChange = (e) => {
    e.persist();
    const newInputs = { ...inputs, [e.target.name]: e.target.value };
    setInputs(newInputs);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
  };
};

export default useForm;
