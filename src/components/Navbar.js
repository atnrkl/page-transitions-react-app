import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNav>
      <StyledLogo to="/">derrno</StyledLogo>
      <StyledUl>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledLi key="1">Homepage</StyledLi>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <StyledLi key="2">About</StyledLi>
        </Link>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <StyledLi key="3">Contact Us</StyledLi>
        </Link>
      </StyledUl>
    </StyledNav>
  );
}

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLi = styled.li`
  padding: 0rem 1.2rem;
  font-size: 1.6rem;
  color: #fff;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;

  height: 60px;
  font-family: "Nova Flat", cursive;
`;

const StyledLogo = styled(Link)`
  font-size: 2.4rem;
  padding: 1.4rem;
  text-decoration: none;
  color: #fff;
`;

export default Navbar;
