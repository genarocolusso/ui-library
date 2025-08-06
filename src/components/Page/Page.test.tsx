import { render, screen } from "@testing-library/react";
import { Page } from "./index"; // adjust path if needed
import "@testing-library/jest-dom";

describe("Page", () => {
  it("renders the title and children", () => {
    const title = "Test Title";
    const children = "TestContent";
    render(<Page title={title}>{children}</Page>);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
