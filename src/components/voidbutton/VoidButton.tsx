import React, { useEffect, useState } from 'react';

export interface VoidButtonProps {
    label: string;
}

const VoidButton = ({ label, ...props }) => {
    const [text, setText] = useState(label);
    useEffect(() => {
        setText(label);
    }, [label]);

    return (
        <button {...props}>
            {text}
        </button>
    );
};

export default VoidButton;
