import React from 'react';

export interface InputTextProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    quiet?: boolean;
    hasError?: boolean;
    darkMode?: boolean;
}

export const InputText: React.FC<InputTextProps> = ({
                                                        value,
                                                        onChange,
                                                        placeholder,
                                                        disabled,
                                                        size = 'md',
                                                        quiet = false,
                                                        hasError = false,
                                                        darkMode = false,
                                                    }) => {
    const sizes = {
        xs: '8px',
        sm: '10px',
        md: '12px',
        lg: '14px',
        xl: '16px',
    };

    const inputStyle = {
        padding: sizes[size],
        fontSize: sizes[size],
        border: hasError ? '1px solid red' : quiet ? 'none' : '1px solid #ccc',
        borderRadius: '4px',
        width: '50%',
        backgroundColor: quiet ? 'transparent' : darkMode ? '#333' : 'white',
        color: darkMode ? 'white' : 'black',
        minWidth: `calc(1.5 * ${sizes[size]})`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    } as React.CSSProperties;

    return (
        <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            style={inputStyle}
        />
    );
};
