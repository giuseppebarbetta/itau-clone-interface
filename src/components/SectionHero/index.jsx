import React from "react";
import * as C from "./styles.js";
import ImgAppleStore from "../../assets/btn-apple-store.svg";
import ImgGooglePlay from "../../assets/btn-google-play.svg";
import ArrowDown from "../../assets/arrow-explorer.svg";
import WomanImg from "../../assets/woman.png";
import { Container } from "../../utils/Container";
import { DivLeft } from "../../utils/DivLeft";

function handleClick() {
  window.location.href = "#SectionServices";
}

export default function SectionHero() {
  return (
    <C.Section>
      <Container>
        <C.ContainerHero>
          <DivLeft>
            <div>
              <C.H1>Tenha seu Banco na palma da mão</C.H1>
              <C.P>
                Todas as operações que você precisa em um só lugar. Simples,
                completo e feito para você
              </C.P>
            </div>
            <C.DivButtons>
              <C.Button>
                <img src={ImgAppleStore} alt="Apple store" />
              </C.Button>
              <C.Button>
                <img src={ImgGooglePlay} alt="Apple store" />
              </C.Button>
            </C.DivButtons>

            <C.ButtonExplorer onClick={handleClick}>
              <img src={ArrowDown} alt="arrow down" />
              <span>Continue explorando</span>
            </C.ButtonExplorer>
          </DivLeft>

          <C.ImgHero src={WomanImg} alt="woman with cellphone" />
        </C.ContainerHero>
      </Container>
    </C.Section>
  );
}
