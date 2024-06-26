import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 80px;
  align-items: center;
  max-width: 100vw;
  height: 80px;
  background-color: #ec7000;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: fit-content;
  margin: 0;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 50px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style-type: none;

  @media (max-width: 775px) {
    gap: 17px;
  }
`;

export const ButtonItemMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

  background: transparent;
  border: none;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 775px) {
    gap: 5px;
  }
  @media (max-width: 615px) {
    display: none;
  }
`;

export const ButtonAccessMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 17px;
  gap: 10px;
  height: 53px;

  cursor: pointer;

  background: #106ab0;
  border-radius: 3px;
  border: none;
  font-weight: bold;
  color: #ffffff;
`;
