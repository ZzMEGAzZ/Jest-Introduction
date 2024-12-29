import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies variant classes", () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByTestId("button")).toHaveClass("btn-secondary");
  });

  test("can be disabled", () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByTestId("button")).toBeDisabled();
  });
});
