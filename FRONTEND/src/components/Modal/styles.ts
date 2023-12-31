import styled from "styled-components";
import { globalTypes } from "../../types/globalTypes";



export const Container = styled.div<Partial<globalTypes>>`
display:${({$show})=> $show ? 'flex' : 'none'};
z-index:99;
position:fixed;
align-items:center;
justify-content:center;
top:0;
left:0;
background-color:#0000004d;
width:100vw;
height:100vh;
`;

export const BoxModal = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
gap:10px;
width:55%; 
height:379px;
background-color:#0F0F0F;
padding-left:53px;

@media (max-width:1182px) {
    padding-left:25px;
}

@media (max-width:490px) {
    font-size:14px;
    width:70%;
    padding-left:6px;

}

@media (max-width:490px) {
    width:80%;

}
`;

export const HeaderModal = styled.span`
display:flex;
justify-content:space-between;
align-items:center;

`;

export const TitleModal = styled.h3`
    font-family: 'Montserrat', 'sans-serif';
    font-size:32px;
    color:#FFFFFF;
    
    @media (max-width:570px) {
        font-size:20px
    }
`


export const BtnCloseModal = styled.button`
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
   background-color:transparent;
   padding-right:20px;


   svg{
    font-size:40px;
    fill:#FFFFFF;

    @media (max-width:570px) {
        font-size:30px
    }
   }
`



export const DisciplinaOptions = styled.h3`
    display:flex;
    flex-direction:column;
    gap:8px;

    p{
    font-family: 'Montserrat', 'sans-serif';
    font-size:17px;
    font-weight:500;
    color:#FFFFFF;
    
    @media (max-width:490px) {
        font-size:15px;

    }
}
`
export const AreaButtons = styled.span`
    display:flex;
    gap:23px;
    
@media (max-width:915px) {
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
}
`;

export const ButtonOption = styled.button<Partial<globalTypes>>`
cursor: pointer;
display:flex;
align-items:center;
justify-content:center;
width:130px;
height:53px;
border-radius:20px;
background-color:${(({$color})=> $color ? $color : 'blue')};
border: ${({ $isSelected }) => $isSelected ? "2px solid white" : "none"};

p{
    font-family: 'Montserrat', 'sans-serif';
    font-size:18px;
    color:#FFFFFF;

    @media (max-width:1182px) {
    
    font-size:16px;
    }

    
    @media (max-width:490px) {
        font-size:14px;

    }
}



@media (max-width:1182px) {
    width:100px;
    height:40px;
}

@media (max-width:490px) {

width: 100px;
height:30px;

}

`;


export const InputNotaArea = styled.div`
display: flex;
flex-direction:column; 
gap:3px;

label{

    p{
    font-family: 'Montserrat', 'sans-serif';
    font-size:14px;
    color:#FFFFFF;

    }

}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
    input[type = number]{
        width:100px;
        height:48px;
        border-radius:12px;
        outline:none;
        border: 1px solid #424242;
        background-color:black;
        color:#FFFFFF;
        text-align:center;
        font-family: 'Montserrat', 'sans-serif';
        font-size:14px;
        
        @media (max-width:570px) {

       height:40px;

      }
    }

`

export const AreaButtonSubmitModal = styled.span`
display:flex;
justify-content:end;
align-items:center;
width:100%;
height:auto

`;

 export const ButtonSubmitModal = styled.button<Partial<globalTypes>>`
 cursor: ${({ $disabled }) => ($disabled ? 'pointer' : 'not-allowed')};
    width: 183px;
    height: 37px;
    background-color: ${({ $disabled }) => ($disabled ? '#E9FF1A' : 'grey')};
    border-radius:12px;
    font-size:16px;
    font-family: 'Montserrat', 'sans-serif';
    font-weight:600;
    margin-right:30px;
    color: ${({ $disabled }) => ($disabled ? '#0A0A0A' : '#787878')};

    @media (max-width:570px) {

        width: 125px;
        font-size:15px;
        height:30px;

      }

`;
