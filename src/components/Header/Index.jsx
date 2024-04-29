import React from "react";
import * as C from "./styles.js";
import logoItau from "../../assets/logo.svg";
import ItemMenu from "./ItemMenu";
import IconUser from "../../assets/icon-user.svg";

export default function Header() {
  return (
    <C.Header>
      <C.Img src={logoItau} alt="logo Itaú" />
      <C.Container>
        <C.Ul>
          <li>
            <ItemMenu name="Para você" />
          </li>
          <li>
            <ItemMenu name="Para empresas" />
          </li>
          <li>
            <ItemMenu name="Serviços" />
          </li>
          <li>
            <ItemMenu name="Ajuda" />
          </li>
        </C.Ul>
      </C.Container>
      <C.ButtonAccessMenu>
        <img src={IconUser} alt="icone-user" />
        <span>Acessar</span>
      </C.ButtonAccessMenu>
    </C.Header>
  );
}
