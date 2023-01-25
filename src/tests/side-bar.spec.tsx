import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { store } from "../store";
import RealSideBar from "../components/Sidebar/RealSideBar";
import CardProduct from "../components/CardProduct";

const product = {
  id: 8,
  name: "Headset Cloud Stinger",
  brand: "HyperX",
  description:
    "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: "600.00",
  createdAt: "2023-01-23T18:17:04.771Z",
  updatedAt: "2023-01-23T18:17:04.771Z",
  counter: 1,
};
describe("Sidebar", () => {
  it("should be render correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardProduct data={product} />
      </Provider>
    );
    expect(getByTestId("addItemToCart")).toBeInTheDocument();
  });
});
