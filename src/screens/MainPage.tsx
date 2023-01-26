import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../components/CardComponents/CardContainer";
import Footer from "../components/Footer";
import { onLoad } from "../features/products/products-slice";
import { RootState } from "../store";
import { getProducts } from "../utils/api";

function MainPage() {
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state: RootState) => {
    return state.SwitchTheme.isDarkMode;
  });

  useEffect(() => {
    const getProductsFunc = async () => {
      const products = await getProducts();
      dispatch(onLoad(products));
    };
    getProductsFunc();
  }, []);
  return (
    <>
      <main
        className={`w-full relative overflow-x-hidden  ${
          isDarkTheme ? "bg-slate-900" : "bg-white"
        } transition-all  items-center justify-center flex flex-col  min-h-screen`}
      >
        <CardContainer />
        <Footer />
      </main>
    </>
  );
}

export default MainPage;
