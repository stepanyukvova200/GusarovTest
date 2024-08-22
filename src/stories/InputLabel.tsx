import React from 'react';

export interface InputLabelProps {
    htmlFor: string;
    text: string;
    required?: boolean;
    position?: 'top' | 'side';
    optionalText?: boolean;
    darkMode?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({
                                                          htmlFor,
                                                          text,
                                                          required,
                                                          position = 'top',
                                                          optionalText = false,
                                                          darkMode = false,
                                                      }) => {
    const labelStyle = {
        display: position === 'side' ? 'inline-block' : 'block',
        marginRight: position === 'side' ? '8px' : 0,
        fontWeight: 'bold',
        color: darkMode ? 'white' : 'black',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    } as React.CSSProperties;

    return (
        <label htmlFor={htmlFor} style={labelStyle}>
            {text}
            {required && <span style={{ color: 'red' }}>*</span>}
            {optionalText && <span style={{ color: 'gray' }}>(optional)</span>}
        </label>
    );
};
