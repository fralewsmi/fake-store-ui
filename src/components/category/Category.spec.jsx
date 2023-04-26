import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Category from "./Category";

jest.mock("../../services/products/products", () => {
  const originalModule = jest.requireActual("../../services/products/products");

  return {
    __esModule: true,
    ...originalModule,
    useGetCategoriesQuery: () => () => {
      data: ["test"];
    },
  };
});

test("renders category", () => {
  render(
    <Provider store={store}>
      <Category />
    </Provider>
  );
  expect(screen.getByLabelText("Category")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});
