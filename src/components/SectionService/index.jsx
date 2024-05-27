import React from "react";
import * as C from "./styles.js";

import ItemList from "./ItemList.jsx";
import { Container } from "../../utils/Container";
import { DivLeft } from "../../utils/DivLeft";

import PhoneIcon from "../../assets/icon-phone.svg";
import SolutionIcon from "../../assets/icon-solutions.svg";
import OptionIcon from "../../assets/icon-options.svg";
import CardIcon from "../../assets/icon-card.svg";
import ImgPhone from "../../assets/phone.png";

export function SectionService() {
  return (
    <C.Section>
      <Container id="SectionServices">
        <C.ContainerService>
          <DivLeft>
            <C.Span>SERVIÇOS EXCLUSIVOS</C.Span>
            <C.H1>Gerencie suas finanças sem sair de casa</C.H1>
            <C.P>
              Veja como você pode cuidar das suas finanças pleo app Itaú de
              forma segura, rápida e o melhor, no conforto da sua casa.
            </C.P>

            <ul>
              <C.Li>
                <ItemList
                  img={PhoneIcon}
                  alt="Phone Icon"
                  p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
                />
              </C.Li>
              <C.Li>
                <ItemList
                  img={SolutionIcon}
                  alt="Solutions Icon"
                  p="Soluções de empréstimos e negociações para organizar suas finanças."
                />
              </C.Li>
              <C.Li>
                <ItemList
                  img={OptionIcon}
                  alt="Options Icon"
                  p="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
                />
              </C.Li>
              <C.Li>
                <ItemList
                  img={CardIcon}
                  alt="Card Icon"
                  p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
                />
              </C.Li>
            </ul>
          </DivLeft>
          <C.DivRight>
            <img src={ImgPhone} alt="CellPhone" />
          </C.DivRight>
        </C.ContainerService>
      </Container>
    </C.Section>
  );
}
