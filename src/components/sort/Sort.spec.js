import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Sort from "./Sort";

test("renders sort", () => {
  render(
    <Provider store={store}>
      <Sort />
    </Provider>
  );
  expect(screen.getByLabelText("Ascending")).toBeInTheDocument();
  expect(screen.getByLabelText("Descending")).toBeInTheDocument();
});
