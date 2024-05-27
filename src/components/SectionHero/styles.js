import styled from "styled-components";
import Background from "../../assets/bg-hero.jpg";

export const Section = styled.section`
  background-image: url(${Background});
  width: 100%;
  height: 704px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1221px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1246px;
  padding: 0 50px;
  margin: 0 auto;
`;

export const ContainerHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1246px;
  padding: 0 50px;
  margin: 0 auto;

  @media (max-width: 935px) {
    flex-direction: column;
  }
`

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 1050px) {
    font-size: 53px;
  }
  @media (max-width: 935px) {
    font-size: 40px;
  }
`;

export const P = styled.p`
  color: #ffffff;
  font-size: 20px;
  max-width: 408px;
  margin-bottom: 32px;

  @media (max-width: 935px) {
    max-width: 325px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  margin-bottom: 71px;
  gap: 10px;
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;

  @media (max-width: 1050px) {
    img {
      width: 100%;
    }
  }
`;

export const ButtonExplorer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border: none;
  cursor: pointer;
  background: transparent;
  margin-bottom: 10px;

  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;

export const ImgHero = styled.img`
  @media (max-width: 1221px) {
    width: 65%;
  }

  @media (max-width: 1080px) {
    width: 50%;
  }

  @media (max-width: 935px) {
    width: 80%;
  }
`
