import React from 'react';

export interface InputAnnotationProps {
    text: string;
    type?: 'info' | 'error';
    showIcon?: boolean;
    darkMode?: boolean;
}

export const InputAnnotation: React.FC<InputAnnotationProps> = ({
                                                                    text,
                                                                    type = 'info',
                                                                    showIcon = false,
                                                                    darkMode = false,
                                                                }) => {
    const color = type === 'error' ? 'red' : 'gray';
    const annotationStyle = {
        marginTop: '4px',
        color: darkMode ? (type === 'error' ? 'red' : 'lightgray') : color,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        alignItems: 'center',
    } as React.CSSProperties;

    const icon = type === 'error' ? '⚠️' : 'ℹ️';

    return (
        <div style={annotationStyle}>
            {showIcon && <span style={{ marginRight: '4px' }}>{icon}</span>}
            {text}
        </div>
    );
};
