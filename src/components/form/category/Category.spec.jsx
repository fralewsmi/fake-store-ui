import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Category from "./Category";

test("renders category input", () => {
  render(<Category value="test" onChange={jest.fn} />);
  expect(screen.getByLabelText("Category")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveValue("test");
});
