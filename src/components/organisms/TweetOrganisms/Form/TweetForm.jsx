import TextInput from "../../../atoms/TextInput/TextInput";
import Search from "../../../icons/Search";
import Field from "../../../molecule/Field/Field";

const TweetForm = () => {
    return (
        <form>
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
        </form>
    );
};

export default TweetForm;
