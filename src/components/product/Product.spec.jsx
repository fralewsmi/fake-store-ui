import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";

test("renders product", () => {
  render(
    <Product
      title="title"
      price="price"
      description="description"
      image="image"
    />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("title");
  expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("price");
  expect(screen.getByText("description")).toBeDefined();
  expect(screen.getByAltText("title")).toBeDefined();
});