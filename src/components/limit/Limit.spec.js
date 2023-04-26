import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Limit from "./Limit";

test("renders limit", () => {
  render(
    <Provider store={store}>
      <Limit />
    </Provider>
  );
  expect(screen.getByLabelText("Limit Results")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});
