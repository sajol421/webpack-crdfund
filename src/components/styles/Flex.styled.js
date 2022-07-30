import styled from "styled-components";
export const Flex = styled.div`
margin-top: 50px;
  display: flex;
  height: 655px;
  margin-left:60px;
  align-items: center;
  & h4 {
     font-size:45px;
  }
  & p {
    font-size:23px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    & h4 {
      font-size:30px;
   }
   & p {
    font-size:17px;
   }
  }
`;
