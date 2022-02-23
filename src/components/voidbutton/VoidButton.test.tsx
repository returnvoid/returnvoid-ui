import React from "react";
import { render } from "@testing-library/react";

import VoidButton from "./VoidButton";

describe("VoidButton", () => {
  test("renders the VoidButton component", () => {
    render(<VoidButton label="Hello world!"><span>this children</span></VoidButton>);
  });
});