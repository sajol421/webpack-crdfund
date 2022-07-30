import styled from "styled-components";

export const Button = styled.button`
font-size: 1em;
color:white;
border-radius: 5px;
background-color: #006DFF;
padding: 0.60em 2em;
border: none ;
cursor: pointer;
&:hover{
    opacity:0.6;
    transform:scale(0.98);
}
@media (max-width: ${({ theme }) => theme.mobile}) {
   
  }

`
export const Button1=styled.button`

color: black; 
cursor: pointer;
border: none ;
border-radius: 5px;
font-size: 1em;
margin: 1em;
padding: 0.60em 2em;
&:hover{
    opacity:0.9;
    transform:scale(0.98)
    

}
@media (max-width: ${({ theme }) => theme.mobile}) {
   
  }




`