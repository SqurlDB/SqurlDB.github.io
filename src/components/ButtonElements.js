import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  background: ${({primary})=> (primary?"#155264": "#95D1BE")};
  white-space: nowrap;
  padding: ${({big})=> (big ? '16px 64px' : '10px 20px')};
  color : #fff;
  font-size: ${({fontBig})=> fontBig ? "20px" : "16px"};
  outline: none;
  border: none;
  cursor: pointer;
  /* font-family:  */
  &:hover{
    transition: all 0.3s ease-out;
    background: ${({primary})=> (primary? "#95D1BE": "#155264")};
  }
  
  @media screen and (max-width: 960px){
    /* width: 100px; */
  }
`