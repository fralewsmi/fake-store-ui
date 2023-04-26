import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Description from "./Description";

test("renders description input", () => {
  render(<Description value="test" onChange={jest.fn} />);
  expect(screen.getByLabelText("Description")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveValue("test");
});
