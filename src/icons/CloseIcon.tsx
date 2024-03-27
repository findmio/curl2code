import React from "react";

type IconType = {
    className?: string;
    onClick?: () => void;
};

const CloseIcon: React.FC<IconType> = (props) => {
    const { className, onClick } = props;

    return (
        <svg
            className={className}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8391"
            onClick={onClick}
            fill="currentColor"
            width={16}
            height={16}
        >
            <path
                d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                p-id="8392"
            />
        </svg>
    );
};
export default CloseIcon;
