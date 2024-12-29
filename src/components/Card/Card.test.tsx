import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("renders children content", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("renders title when provided", () => {
    render(
      <Card title="Test Title">
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card-title")).toHaveTextContent("Test Title");
  });

  test("applies different variant styles", () => {
    const { rerender } = render(
      <Card variant="outlined">
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveClass("border", "border-gray-200");

    rerender(
      <Card variant="elevated">
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveClass("shadow-lg");
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>
        <p>Clickable content</p>
      </Card>
    );

    fireEvent.click(screen.getByTestId("card"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has correct role when clickable", () => {
    const { rerender } = render(
      <Card onClick={() => {}}>
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveAttribute("role", "button");

    rerender(
      <Card>
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveAttribute("role", "article");
  });

  test("applies custom className", () => {
    render(
      <Card className="custom-class">
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveClass("custom-class");
  });

  // Integration test with nested components
  test("works with nested components", () => {
    render(
      <Card title="Profile Card">
        <div>
          <h4>John Doe</h4>
          <p>Developer</p>
          <button>Contact</button>
        </div>
      </Card>
    );

    expect(screen.getByText("Profile Card")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});

describe("Card", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <Card title="Test Card">
        <p>Test content</p>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });

  // Test with different variants
  test("matches snapshot with different variants", () => {
    const { container: defaultCard } = render(
      <Card variant="default">
        <p>Default variant</p>
      </Card>
    );
    expect(defaultCard).toMatchSnapshot("default variant");

    const { container: outlinedCard } = render(
      <Card variant="outlined">
        <p>Outlined variant</p>
      </Card>
    );
    expect(outlinedCard).toMatchSnapshot("outlined variant");
  });
});
