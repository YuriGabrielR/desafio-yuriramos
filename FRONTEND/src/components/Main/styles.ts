import styled from "styled-components";


export const Wrapper = styled.main`
display:flex;
justify-content:space-around;
padding: 0px 40px;
align-items:center;
flex-direction:column;
width: auto; 
margin: 0 auto;


@media (max-width: 524px) {
    gap: 46px;

  }

`;

export const BimestreBoxArea = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:27px;
width:100%;
height:auto; 
padding:20px;
`; 

export const HeaderBox = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;

@media (max-width: 360px) {
        font-size:14px;
        width:100vw;
        justify-content:center;
        gap:24px;
 }
`;

export const Title = styled.h2`
    font-family: 'Montserrat', 'sans-serif';  
    font-weight:500; 
    color: #FFFFFF;
    font-size:18px; 
    line-height:18px;

   
`;


export const Button = styled.button`
    display:flex;
    gap:8px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    width: 183px;
    height: 37px;
    background-color: #E9FF1A;
    border-radius:12px;
    color:#0F0F0F;
    font-size:16px;
    font-family: 'Montserrat', 'sans-serif';
    font-weight:600;

    svg{
        font-size:32px;
        fill:#0F0F0F;
        
    @media (max-width: 524px) {
        font-size:14px;

      }
    }

    @media (max-width: 524px) {
        width: 130px;
        font-size:14px;

      }
`;
