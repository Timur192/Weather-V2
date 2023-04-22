import styles from "./NavBar.module.css";
import LeftSide from './leftSide'
import Input from "./input";
import RightSide from "./rightSide";

export default function NavBar() {
  return (
    <div className={styles.main}>
      <LeftSide />
      <Input />
      <RightSide />
    </div>
  );
}
