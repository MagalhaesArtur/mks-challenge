import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar/SideBar";
import { onLoad } from "../features/products/products-slice";
import { getProducts } from "../utils/api";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsFunc = async () => {
      const products = await getProducts();
      dispatch(onLoad(products));
    };
    getProductsFunc();
  }, []);
  return (
    <>
      <main className="w-full relative items-center justify-center flex flex-col  h-screen">
        <SideBar />
        <CardContainer />
        <Footer />
      </main>
    </>
  );
}

export default MainPage;
