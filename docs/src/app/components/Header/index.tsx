import React from "react";
import styled from "styled-components";
import MenuIcon from "../../../../public/img/menu-icon.svg";
import { IoIosClose } from "react-icons/io"

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1B1B1B;
  border-bottom-right-radius: 0;
  overflow: hidden;
  z-index: 9;
  transform-origin: left bottom;
  transform: scaleY(0);
  transition: transform 0.7s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;

const MenuButton = styled.button`
  font-size: 60px;
  color: #818181;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 30px;
  height: 30px;
  fill: #818181;
  transition: fill 0.5s;
  & {
    transition: color 0.8s ease;
  }
  &:hover {
    color: #f1f1f1;
  }
`;

const MenuItens = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: Lekton;
  color: #818181;
  display: block;
  font-size: 40px;
  transition: 0.5s;

  &:hover {
    color: #f1f1f1;
  }
`;

interface HeaderProps {
  isOpen?: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <Container style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}>
        <MenuButton onClick={toggleMenu}>
          <IoIosClose />
        </MenuButton>
        <MenuItens>
          <Link href="/Inicio">Inicio</Link>
          <Link href="/Sobre">Sobre mim</Link>
          <Link href="/Projetos">Projetos</Link>
          <Link href="/Contatos">Contatos</Link>
          <Link>...</Link>
        </MenuItens>
      </Container>
    </>
  );
};

export default Header;
