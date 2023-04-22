import { useDispatch, useSelector } from "react-redux";
import { toggleLangs } from "@/redux/Slices/langsSlice";
import { toggleTheme } from "@/redux/Slices/themeSlice";
import { RootState } from "@/redux/store";
import { Button } from "antd";
import styles from "./rightSide.module.css";

export default function index() {
  const isLightMode = useSelector(
    (state: RootState) => state.theme.isLightMode
  );
  const Langs = useSelector((state: RootState) => state.langs.langs);
  const dispatch = useDispatch();
  document.documentElement.setAttribute("dark-theme", `${!isLightMode}`);
  localStorage.setItem("Langs", Langs);
  const LangsSwitch = () => {
    dispatch(toggleLangs());
  };
  return (
    <div className={styles.switch}>
      <div>
        <Button className={styles.langsBTN} onClick={LangsSwitch} type="text" block>
          <p>{Langs.toUpperCase()}</p>
        </Button>
      </div>
      <div>
        <img
          onClick={() => dispatch(toggleTheme())}
          src={isLightMode ? "/sun.svg" : "/moon.svg"}
          alt="currentTheme"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
