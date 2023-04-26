import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "./Image";

test("renders image input", () => {
  render(<Image value="test" onChange={jest.fn} />);
  expect(screen.getByLabelText("Image")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveValue("test");
});
