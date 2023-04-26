import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn,
}));

test("renders product", () => {
  render(
    <Product
      title="title"
      price={100}
      description="description"
      image="image"
    />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("title");
  expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
    "$100.00"
  );
  expect(screen.getByText("description")).toBeInTheDocument();
  expect(screen.getByAltText("title")).toBeInTheDocument();
});
