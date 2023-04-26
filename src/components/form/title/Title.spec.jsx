import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";

test("renders title input", () => {
  render(<Title value="test" onChange={jest.fn} />);
  expect(screen.getByLabelText("Title")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveValue("test");
});
