import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from "../components/NavBar";
import { store } from "../store";

describe("Navbar", () => {
  it("should be render correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    expect(getByText("MKS")).toBeInTheDocument();
  });

  it("should be render Sidebar button correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    expect(getByTestId("sideBarButton")).toBeInTheDocument();
  });

  it("should be render Sidebar when button clicked", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const sideBarButton = getByTestId("sideBarButton");
    UserEvent.click(sideBarButton);
    setTimeout(() => {
      expect(getByTestId("sideBar")).toBeInTheDocument();
    }, 1000);
  });
});
