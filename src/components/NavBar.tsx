import { Button } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { getProducts } from "../utils/api";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../store";

function NavBar() {
  const counter = useSelector((state: RootState) => {
    return state.totalItemsCounter.value;
  });

  return (
    <nav className="bg-azulzin-500 w-full h-[101px]  text-white  flex justify-around  items-center font-montserrat">
      <div className="flex gap-3 items-end ">
        <h1 className="text-[30px] mb-0 font-semibold">MKS</h1>
        <h2 className="text-xl mb-1 font-light ">Sistemas</h2>
      </div>
      <Button
        onClick={() => {
          getProducts();
        }}
        className="flex gap-4 !text-xl !font-bold"
        style={{
          borderRadius: 35,
          backgroundColor: "#fff",
          padding: "18px 36px",
          color: "#000",

          fontSize: "18px",
        }}
        variant="contained"
      >
        <LocalGroceryStoreIcon />
        <h3>{counter}</h3>
      </Button>
    </nav>
  );
}

export default NavBar;
