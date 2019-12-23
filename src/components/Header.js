import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 2em;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 1em;
  width: 8em;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
    </HeaderContainer>
  );
}

export default Header;
