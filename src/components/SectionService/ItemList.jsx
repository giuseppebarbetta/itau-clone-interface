import * as C from "./styles.js";

export default function ItemList({ p, img, alt }) {
  return (
    <>
      <C.DivMasc>
        <img src={img} alt={alt} />
      </C.DivMasc>
      <p>{p}</p>
    </>
  );
}
