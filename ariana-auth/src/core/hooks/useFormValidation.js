import { useState } from "react";

const useFormValidation = (initialFormState, validationRules) => {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        for (const field in validationRules) {
            const rule = validationRules[field];
            const value = form[field];

            if (rule.required && !value.trim()) {
                newErrors[field] = `${field} is required.`;
                isValid = false;
            }

            if (rule.minLength && value.length < rule.minLength) {
                newErrors[
                    field
                ] = `${field} must be at least ${rule.minLength} characters.`;
                isValid = false;
            }

            if (rule.maxLength && value.length > rule.maxLength) {
                newErrors[
                    field
                ] = `${field} must be at least ${rule.maxLength} characters.`;
                isValid = false;
            }

            if (rule.pattern && !rule.pattern.test(value)) {
                newErrors[field] = `Invalid ${field}.`;
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    return {
        form,
        errors,
        handleChange,
        validate,
    };
};

export default useFormValidation;
