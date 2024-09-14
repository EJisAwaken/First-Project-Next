import React from 'react';

interface InputProps {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export default function Input({ value, placeholder, onChange }: InputProps) {
    return (
        <input
            className={"w-1/2 border-b-4 border-black"}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        />
    );
}
