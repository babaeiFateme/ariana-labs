import { useState } from "react";
import { TweetForm } from "../components/organisms/TweetOrganisms";
import Message from "../components/organisms/TweetOrganisms/Messages/Message";

const TweetTemplate = () => {
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handlePostSuccess = () => {
        setShouldRefetch((prev) => !prev);
    };

    return (
        <div className="max-w-[664px] mx-auto w-full">
            <TweetForm
                onPostSuccess={handlePostSuccess}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Message shouldRefetch={shouldRefetch} searchTerm={searchTerm} />
        </div>
    );
};

export default TweetTemplate;
