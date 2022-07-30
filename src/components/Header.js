import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Button1 } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import GlobalStyles from "./styles/Global";
import header from '../assets/header.png'

export const Header = () => {
  const laughImg = document.getElementById('laughImg')
  return (
    <StyledHeader> 
      <Container>
        <GlobalStyles/>
        <Flex>
          <div>
            <h4>Discover, invest, Collect 
            and Profit Form cards
            </h4>
            <p>BooleanStock is the worlds first company
            Cards Marketplaces</p>
            <Button >Explore</Button>
            <Button1 >Create</Button1>
          </div>
          <Image src={laughImg.src = header} alt="" />
          
        </Flex>
        
      </Container>
      </StyledHeader>
   
  );
};

export default Header;
