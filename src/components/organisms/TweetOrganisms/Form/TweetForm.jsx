import TextAreaInput from "../../../atoms/TextAreaInput/TextAreaInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Search from "../../../icons/Search";
import Field from "../../../molecule/Field/Field";

import img from "../../../../../public/images/pages/tweet/user.png";
import Button from "../../../atoms/Button/Button";
import useFetch from "../../../../core/hooks/useFetch";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";
import useFormValidation from "../../../../core/hooks/useFormValidation";
import avatar from "../../../../../public/images/_general/avatar.png";
import { useRef } from "react";

const TweetForm = ({  searchTerm, setSearchTerm, insetNewTweet }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const formRef = useRef(null);

    const searchRef = useRef("");

    const { fetchData, isLoading, isError } = useFetch();

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
    const onFormSuccess = (result) => {
        formRef.current?.reset()
        insetNewTweet(result)
    };

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
                    onFormSuccess(result);
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
                        searchRef={searchRef}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20">
                        <Search />
                    </div>
                </div>
            </Field>

            {!searchTerm && (
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="border border-gray-200 rounded-md p-4 mt-[22px]">
                        <div className="relative flex gap-2 items-start">
                            <img
                                src={user.img ? user.img : avatar}
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
                         disabled={isLoading}
                            type="submit"
                            variant="primary"
                            className="w-fit block mr-0 ml-auto py-2 !px-[25px] mt-2"
                        >
                             {isLoading ? "Loading..." : "Post"}
                            
                        </Button>
                    </div>
                </form>
            )}
        </>
    );
};

export default TweetForm;
