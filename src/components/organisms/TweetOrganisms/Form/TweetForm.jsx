import TextAreaInput from "../../../atoms/TextAreaInput/TextAreaInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Search from "../../../icons/Search";
import Field from "../../../molecule/Field/Field";

import img from "../../../../../public/images/pages/tweet/user.png";
import Button from "../../../atoms/Button/Button";
const TweetForm = () => {
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

            <form>
                <div className="border border-gray-200 rounded-md p-4 mt-[22px]">
                    <div className="relative flex gap-2 items-start">
                        <img
                            src={img}
                            alt="user"
                            className="w-10 aspect-square rounded-full"
                        />
                        <Field name="message">
                            <TextAreaInput
                                rows="5"
                                className="border-0 mt-1"
                                placeholder="What ‘s Happening ?"
                                name="message"
                            />
                        </Field>
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-fit block mr-0 ml-auto py-2 !px-[25px]"
                    >
                        Post
                    </Button>
                </div>
            </form>
        </>
    );
};

export default TweetForm;
