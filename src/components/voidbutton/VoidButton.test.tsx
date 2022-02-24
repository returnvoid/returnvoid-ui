import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import VoidButton from "./VoidButton";

describe("VoidButton", () => {
  it("should render the VoidButton component", () => {
    render(<VoidButton label="Hello world!" mode="primary" size="large" />);
  })

  it('should update label', () => {
    render(<VoidButton data-testid="void-button" label="new label" mode="primary" />)
    expect(screen.getByTestId('void-button')).toHaveTextContent('new label')
  })

  test('it should trigger click event', () => {
    const onClickFunc = jest.fn();
    render(<VoidButton data-testid="void-button" label="again" mode="secondary" onClick={onClickFunc} />)
    const voidButton = screen.getByTestId('void-button')
    fireEvent.click(voidButton)
    expect(onClickFunc).toHaveBeenCalled()
  })
});
