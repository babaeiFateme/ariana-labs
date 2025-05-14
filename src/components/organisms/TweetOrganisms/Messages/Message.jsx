import img from "../../../../../public/images/pages/tweet/user.png";
import EmptyState from "../../../atoms/EmptyState/EmptyState";
import messageInfo from "./resources/message";
const Message = () => {
    const isEmpty = messageInfo.length === 0;

    return (
        <>
            {!isEmpty ? (
                <ul className="*:bg-gray-650 *:mb-4 *:p-4 mt-4 *:rounded-md">
                    {messageInfo.map((tweet) => (
                        <li key={tweet.id}>
                            <div className="flex gap-2.5 items-center flex-wrap">
                                <img
                                    src={img}
                                    alt="user"
                                    className="w-8 aspect-square rounded-full"
                                />

                                <div className="flex flex-col items-start">
                                    <span className="text-black font-medium text-md leading-3 mb-1">
                                        {tweet.username}
                                    </span>

                                    <span className="text-gray-900 text-sm font-light">
                                        30 minutes ago
                                    </span>
                                </div>
                            </div>

                            <div className="mt-[13px] min-h-[61px] overflow-auto font-light font-sm">
                                {tweet.message}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <EmptyState>
                    <div className="text-medium font-thin">
                        No results found for
                        <span className="font-bold">“React”</span>. Try checking
                        your spelling or using different keywords.
                    </div>
                </EmptyState>
            )}
        </>
    );
};

export default Message;
