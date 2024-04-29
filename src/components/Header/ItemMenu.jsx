import arrowDown from "../../assets/arrow-down.svg";
import * as C from "./styles.js";

export default function ItemMenu({ name }) {
  return (
    <C.ButtonItemMenu>
      <span>{name}</span>
      <img src={arrowDown} alt="arrow-down" />
    </C.ButtonItemMenu>
  );
}
