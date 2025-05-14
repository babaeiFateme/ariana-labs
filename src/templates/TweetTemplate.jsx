import { TweetForm } from "../components/organisms/TweetOrganisms";
import Message from "../components/organisms/TweetOrganisms/Messages/Message";

const TweetTemplate = () => {
    return (
        <div className="max-w-[664px] mx-auto w-full">
            <TweetForm />

            <Message />
        </div>
    );
};

export default TweetTemplate;
