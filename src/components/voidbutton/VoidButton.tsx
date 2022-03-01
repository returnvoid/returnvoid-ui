import React from 'react';
import styled, { css } from 'styled-components';
import useTheme from '../../hooks/useThemeProvider';
interface IVoidButton {
    mode?: string;
    size?: string;
    rounded?: boolean;
    block?: boolean;
    theme: string;
}

const StyledButton = styled.button<IVoidButton>`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    border-radius: ${props => props.rounded ? '10px' : '0px'};
    color: ${props => props.theme === 'dark' ? 'white' : '#000'};
    ${props => props.block && css`
        display: block;
        width: 100%;
    `};
    ${props => {
        switch (props.mode) {
            case 'primary':
                return `
                    background-color: #000;
                    color: #fff;
                    border: 1px solid #000000;
                `;
            case 'secondary':
                return `
                    background-color: #fafafa;
                    color: #000;
                    border: 1px solid #999;
                `;
        };
    }};
    ${props => {
        switch (props.size) {
            case 'small':
                return `
                    padding: 4px 8px;
                    font-size: 11px;
                    `;
            case 'medium':
                return `
                    padding: 8px 16px;
                    font-size: 14px;
                `;
            case 'large':
                return `
                    padding: 16px 32px;
                    font-size: 18px;
                `;
        };
    }};
` as React.FunctionComponent<IVoidButton>;

const VoidButton = ({ label, ...props }) => {
    const { theme } = useTheme();

    return (
        <StyledButton theme={theme} {...props}>
            {label}
        </StyledButton>
    );
};

VoidButton.defaultProps = {
    mode: 'primary',
    size: 'medium',
    rounded: false,
    block: false,
}

export default VoidButton;
