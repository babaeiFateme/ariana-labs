import { useState } from "react";
import { TweetForm } from "../components/organisms/TweetOrganisms";
import Message from "../components/organisms/TweetOrganisms/Messages/Message";
import useDebounce from "../core/hooks/useDebounce";

const TweetTemplate = () => {
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const debouncedValue = useDebounce(searchTerm, 500);

    const insetNewTweet = (result) => {
        setData((prev) => [...prev, result]);
    };

    

    return (
        <div className="max-w-[664px] mx-auto w-full">
            <TweetForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                insetNewTweet={insetNewTweet}
            />

            <Message
                shouldRefetch={shouldRefetch}
                searchTerm={debouncedValue}
                data={data}
                setData={setData}
            />
        </div>
    );
};

export default TweetTemplate;
