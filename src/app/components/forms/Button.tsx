import React from 'react';

interface ButtonProps {
    value: string;
    onClick: () => void;
    color: string;
}

export default function Button({ value, onClick, color }: ButtonProps) {
    return (
        <button
            style={{ backgroundColor: color }}
            className="my-5 dark:text-white text-xl bg-blue-950 text-gray-800 px-4 py-2 rounded-md active:bg-gray-600"
            onClick={onClick}
        >
            {value}
        </button>
    );
}
