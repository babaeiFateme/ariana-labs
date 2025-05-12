import { Link as ReactLink } from "react-router-dom";

const Link = ({ href, children, ...props }) => {
    return (
        <ReactLink to={href} {...props}>
            {children}
        </ReactLink>
    );
};

export default Link;
