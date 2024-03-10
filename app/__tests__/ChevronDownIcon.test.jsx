// ChevronDownIcon.test.js
import { render } from "@testing-library/react";
import { ChevronDownIcon } from "./ChevronDownIcon"; // Adjust the import path according to your project structure

describe("ChevronDownIcon", () => {
  it("renders correctly", () => {
    const { getByRole } = render(<ChevronDownIcon />);
    const icon = getByRole("presentation");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("height", "1em");
    expect(icon).toHaveAttribute("width", "1em");
    expect(icon).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("accepts and applies custom stroke width", () => {
    const customStrokeWidth = 2;
    const { getByRole } = render(
      <ChevronDownIcon strokeWidth={customStrokeWidth} />
    );
    const path = getByRole("presentation").querySelector("path");
    expect(path).toHaveAttribute("stroke-width", customStrokeWidth.toString());
  });
});
