import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";

import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);

  if (status === "idle") {
    return (
      <Wrapper>
        <Logo />
        <Nav>
          <FiHome />
          <StyledNavLink exact to="/">
            Home Feed
          </StyledNavLink>
        </Nav>
        <Nav>
          <FiUser />

          <StyledNavLink exact to={`/${currentUser.profile.handle}`}>
            Profile
          </StyledNavLink>
        </Nav>
        <Nav>
          <FiBell />
          <StyledNavLink exact to="/notifications">
            Notifications
          </StyledNavLink>
        </Nav>
        <Nav>
          <FiBookmark />
          <StyledNavLink exact to="/bookmarks">
            Bookmarks
          </StyledNavLink>
        </Nav>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

const Wrapper = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  display: flex;
  color: ${COLORS.primary};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 15px;

  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
