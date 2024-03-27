import React from "react";

type IconType = {
    className?: string;
    onClick?: () => void;
};

const CheckIcon: React.FC<IconType> = (props) => {
    const { className, onClick } = props;

    return (
        <svg
            className={className}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1294"
            onClick={onClick}
            fill="currentColor"
            width={16}
            height={16}
        >
            <path
                d="M410 893.7c-4.9 0-12.1-1.2-18.8-7l-377.1-323c-5.9-5-9.4-12-10-19.7s1.8-15.2 6.9-21.1c5.5-6.4 13.5-10.1 22-10.1 4.9 0 12.1 1.2 18.8 7l355 304.1L969 162.1c5.5-6.5 13.6-10.2 22.1-10.2 4.8 0 12 1.2 18.7 6.9 5.9 5 9.5 12 10.1 19.7 0.6 7.7-1.8 15.2-6.8 21.1l-581 683.8c-5.5 6.5-13.5 10.3-22.1 10.3z"
                p-id="1295"
            />
        </svg>
    );
};
export default CheckIcon;
