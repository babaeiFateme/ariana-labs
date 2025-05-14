import img from "../../../../../public/images/pages/tweet/user.png";
import messageInfo from "./resources/message";
const Message = () => {
    return (
        <ul className="*:bg-gray-650 *:mb-4 *:p-4 mt-4 *:rounded-md">
            {messageInfo &&
                messageInfo.map((tweet) => {
                    return (
                        <li key={tweet.id}>
                            <div className="flex gap-2.5 items-center flex-wrap">
                                <img
                                    src={img}
                                    alt="user"
                                    className="w-8 aspect-square rounded-full"
                                />

                                <div className="flex flex-col items-start">
                                    <span className="text-black font-medium text-md leading-3 mb-1-">
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
                    );
                })}
        </ul>
    );
};

export default Message;
