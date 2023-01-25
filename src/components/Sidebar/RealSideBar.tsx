import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CardProductInCart from "../CardProductInCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Fragment, useEffect, useState } from "react";

type Anchor = "right";

export default function RealSideBar() {
  const counter = useSelector((state: RootState) => {
    return state.totalItemsCounter.value;
  });

  const allProductsInCart = useSelector((state: RootState) => {
    return state.allProductsInCart.products;
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const product of allProductsInCart) {
      total += Number(product.price.slice(0, -3)) * product.counter;
    }
    setTotalPrice(total);
  }, [allProductsInCart]);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <aside
      className={`bg-azulzin-500 !font-montserrat  flex flex-col justify-between w-[500px]  h-screen ${
        allProductsInCart.length >= 6 ? "overflow-y-scroll" : "overflow-auto"
      } `}
    >
      <div className="px-5 py-7 ">
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-white  w-48 text-3xl">
            Carrinho de Compras
          </h1>
          <button
            onClick={toggleDrawer(anchor, false)}
            className=" w-12 h-12 bg-black hover:!text-red-600 text-red-400 transition-all rounded-full"
          >
            <CloseIcon fontSize={"medium"} />
          </button>
        </header>
        <div className={`flex flex-col  items-center justify-center`}>
          {allProductsInCart.map((product) => (
            <CardProductInCart data={product} />
          ))}
        </div>
      </div>
      <div className="text-3xl w-full flex flex-col gap-4  items-center text-white font-bold">
        <div className="justify-between px-6 w-full flex">
          <h2>Total:</h2>
          <h2>R${totalPrice}</h2>
        </div>
        <button className="bg-black w-full h-[100px] text-3xl font-bold text-white">
          Finalizar Compra
        </button>
      </div>
    </aside>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {
              <Button
                className="flex gap-4 text-xl "
                style={{
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  padding: "18px 36px",
                  color: "#000",
                  fontSize: "18px",
                }}
                variant="contained"
              >
                <LocalGroceryStoreIcon />
                <h3 className="font-bold text-xl">{counter}</h3>
              </Button>
            }
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
