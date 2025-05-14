import TextAreaInput from "../../../atoms/TextAreaInput/TextAreaInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Search from "../../../icons/Search";
import Field from "../../../molecule/Field/Field";

import img from "../../../../../public/images/pages/tweet/user.png";
import Button from "../../../atoms/Button/Button";
import useFetch from "../../../../core/hooks/useFetch";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";
import useFormValidation from "../../../../core/hooks/useFormValidation";
import { useRef } from "react";

const TweetForm = ({onPostSuccess }) => {
    const { fetchData, isLoading, isError } = useFetch();
    const formRef = useRef(null);

    const validationRules = {
        text: {
            required: true,
            minLength: 1,
        },
    };

    const { form, errors, handleChange, validate } = useFormValidation(
        { text: "" },
        validationRules
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            fetchData({
                url: API_ENDPOINTS.tweet,
                method: "POST",
                data: form,
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                    "X-CSRFToken": `Token ${localStorage.getItem("token")}`,
                },

                onSuccess: (result) => {
                    console.log(result);
                    onPostSuccess?.();
                    formRef.current?.reset(); 
                },

                onError: (error) => {
                    console.error("Login failed:", error.message);
                },
            });
        }
    };

    return (
        <>
            <Field>
                <div className="relative">
                    <TextInput
                        className="max-w-['664px'] w-full padding-style"
                        name="search"
                        placeholder="search ..."
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20">
                        <Search />
                    </div>
                </div>
            </Field>

            <form onSubmit={handleSubmit} ref={formRef} >
                <div className="border border-gray-200 rounded-md p-4 mt-[22px]">
                    <div className="relative flex gap-2 items-start">
                        <img
                            src={img}
                            alt="user"
                            className="w-10 aspect-square rounded-full"
                        />
                        <Field name="text" className="grow" errors={errors}>
                            <TextAreaInput
                                rows="4"
                                className="border-0 mt-1"
                                value={form.text}
                                onChange={handleChange}
                                placeholder="What ‘s Happening ?"
                                name="text"
                            />
                        </Field>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-fit block mr-0 ml-auto py-2 !px-[25px] mt-2"
                    >
                        Post
                    </Button>
                </div>
            </form>
        </>
    );
};

export default TweetForm;
