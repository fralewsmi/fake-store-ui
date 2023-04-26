import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Price from "./Price";

test("renders price input", () => {
  render(<Price value="test" onChange={jest.fn} />);
  expect(screen.getByLabelText("Price")).toBeInTheDocument();
});
