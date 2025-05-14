import { useEffect, useState } from "react";
import useFetch from "../../../../core/hooks/useFetch";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";
import EmptyState from "../../../atoms/EmptyState/EmptyState";
import TimeHandler from "../../../../core/helpers/TimeHandler";
import Skeleton from "../../../atoms/Skeleton/Skeleton";

const Message = ({ shouldRefetch, searchTerm }) => {
    const { fetchData, isLoading, isError } = useFetch();
    const [data, useData] = useState(null);

    useEffect(() => {
        fetchData({
            url: API_ENDPOINTS.tweet,
            method: "GET",
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
                "X-CSRFToken": localStorage.getItem("token") ?? "",
            },
            onSuccess: (result) => {
                useData(result.results);
            },
            onError: (error) => {
                console.error("Failed to fetch messages:", error.message);
            },
        });
    }, [shouldRefetch]);


    useEffect(() => {
        fetchData({
            url: `https://mock.arianalabs.io/api/tweet/?search=${searchTerm}`,
            method: "GET",
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
                "X-CSRFToken": localStorage.getItem("token") ?? "",
            },
            onSuccess: (result) => {
                useData(result.results);
            },
            onError: (error) => {
                console.error("Failed to fetch messages:", error.message);
            },
        });
    }, [searchTerm]);

    const isEmpty = !data || data.length === 0;

    if (isLoading) return <Skeleton />;
    if (isError) return <div>Error loading messages.</div>;

    return (
        <>
            {!isEmpty ? (
                <ul className="*:bg-gray-650 *:mb-4 *:p-4 mt-4 *:rounded-md">
                    {data.map((tweet) => (
                        <li key={tweet.id}>
                            <div className="flex gap-2.5 items-center flex-wrap">
                                <img
                                    src="/images/pages/tweet/user.png"
                                    alt="user"
                                    className="w-8 aspect-square rounded-full"
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-black font-medium text-md leading-3 mb-1">
                                        {tweet.author.first_name}
                                        {tweet.author.lname_name}
                                    </span>
                                    <span className="text-gray-900 text-sm font-light">
                                        {TimeHandler(tweet.created_at)}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-[13px] min-h-[61px] overflow-auto font-light font-sm">
                                {tweet.text}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <EmptyState>
                    <div className="text-medium font-thin">
                        No messages found. Try again later.
                    </div>
                </EmptyState>
            )}
        </>
    );
};

export default Message;
