import React from "react";
import styled from "styled-components";

const Spacer = styled.div`
  height: 91px;

  @media (min-width: 510px) {
    height: 60px;
  }
`;

const NavBarSpacer = () => {
  return <Spacer />;
};

export default NavBarSpacer;
