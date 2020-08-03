import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo />
      <StyledNavLink exact to="/">
        Home Feed
      </StyledNavLink>
      <StyledNavLink exact to="/profile">
        Profile
      </StyledNavLink>
      <StyledNavLink exact to="/notifications">
        Notifications
      </StyledNavLink>
      <StyledNavLink exact to="/bookmarks">
        Bookmarks
      </StyledNavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
