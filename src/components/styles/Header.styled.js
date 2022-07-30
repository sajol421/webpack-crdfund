import styled from "styled-components";
export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  `;

export const Logo = styled.img`
  margin-left: 70px;
  margin-right:80px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 10px 5px;
  }
`;
export const Image = styled.img`
  width: 40%;
  margin-right: 50px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
   align-items: center;
   margin-right: 0px;
   width: 70%;
`;
