import styled from "styled-components";
import Background from "../../assets/bg-hero.jpg";

export const Section = styled.section`
  background-image: url(${Background});
  width: 100%;
  height: 704px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

export const DivLeft = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: 40px;
`;

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const P = styled.p`
  color: #ffffff;
  font-size: 20px;
  max-width: 408px;
  margin-bottom: 32px;
`;

export const DivButtons = styled.div`
  display: flex;
  margin-bottom: 96px;
  gap: 10px;
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

export const ButtonExplorer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border: none;
  cursor: pointer;
  background: transparent;

  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`;
