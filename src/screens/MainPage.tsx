import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
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
      <main className="w-full relative overflow-x-hidden  items-center justify-center flex flex-col  min-h-screen">
        <CardContainer />
        <Footer />
      </main>
    </>
  );
}

export default MainPage;
