import { useSelector } from "react-redux";
import { RootState } from "../store";

function Footer() {
  const isDarkTheme = useSelector((state: RootState) => {
    return state.SwitchTheme.isDarkMode;
  });
  return (
    <footer
      className={`w-screen absolute bottom-0 flex justify-center items-center font-montserrat font-normal text-xs ${
        isDarkTheme ? "bg-slate-800 text-white" : " text-slate-900 bg-[#EEEEEE]"
      } transition-all  h-9`}
    >
      <h1>MKS sistemas © Todos os direitos reservados</h1>
    </footer>
  );
}

export default Footer;
