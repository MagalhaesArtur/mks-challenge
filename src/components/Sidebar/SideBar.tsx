import { useDispatch, useSelector } from "react-redux";
import { changeToFalse } from "../../features/isSidebarOpen/sideBar-slice";
import { RootState } from "../../store";
import CloseIcon from "@mui/icons-material/Close";

function SideBar() {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state: RootState) => {
    return state.isSidebarOpenState;
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      dispatch(changeToFalse());
    }
  });

  return (
    <aside
      id="sideBar"
      className={`bg-azulzin-500 !font-montserrat  right-0  h-screen ${
        isSidebarOpen.open ? "w-[500px]" : `w-0 !h-0`
      } `}
    >
      <div className="px-5 py-7">
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-white  w-48 text-3xl">
            Carrinho de Compras
          </h1>
          <button
            onClick={() => {
              dispatch(changeToFalse());
            }}
            className=" w-12 h-12 bg-black hover:!text-red-600 text-red-400 transition-all rounded-full"
          >
            <CloseIcon fontSize={"medium"} />
          </button>
        </header>
      </div>
    </aside>
  );
}

export default SideBar;
