import React, { ReactNode, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export interface VoidButtonProps {
    label: string;
    children: ReactNode;
}

const VoidButton = ({ label, children }) => {
    const [text, setText] = useState(label);
    useEffect(() => {
        console.log('🚀 ~ file: VoidButton.tsx ~ line 14 ~ VoidButton ~ label', label);
        setText(label);
    }, [label]);

    return (
        <button>
            {text} {children}
        </button>
    );
};

export default VoidButton;
