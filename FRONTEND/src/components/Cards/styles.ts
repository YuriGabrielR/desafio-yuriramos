import styled from "styled-components";
import { globalTypes } from "../../types/globalTypes";

export const CardsArea = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 77px;
  width: 100%;
  height: auto;
  padding: 5px;

  @media (max-width: 992px) {
    justify-content:center;
    align-items:center;
  }

  @media (max-width: 524px) {
    gap: 46px;

  }


`;

export const Card = styled.div<Partial<globalTypes>>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 158px;
  height: 146px;
  padding-top: 12px;
  border-radius: 20px;
  background-color: ${({ $disciplina }) => {
    switch ($disciplina) {
      case 'Biologia':
        return '#CC4090'; 

      case 'Artes':
        return '#05A2C2'; 

      case 'Geografia':
        return '#C26719'; 

        case 'Sociologia':
            return '#9B19C2'; 

      default:
        return 'grey'; 
    }
  }} ;



  button {
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    top: 0;
    right: -35px;

    @media (max-width: 524px) {
        right:-25px;

      }

    svg {
      font-size: 25px;
      fill: red;

      
      @media (max-width: 524px) {
        font-size:22px;

      }
    }
  }



  @media (max-width: 524px) {
    width:130px;

  }



 
`;

export const SubjectDateInfo = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 16px;

  h3 {
    font-family: "Montserrat", "sans-serif";
    font-size: 18px;
    color: #ffffff;
  }

  p {
    font-family: "Montserrat", "sans-serif";
    font-size: 12px;
    color: #ffffff;
  }
`;

export const NotaInfo = styled.span<Partial<globalTypes>>`
 background-color:#0f0f0f78;
  display: flex;
  align-items: center;
  padding-left: 12px;
  gap: 5px;
  height: 30px;
  width: 100%;

  svg {
    font-size: 17px;
    fill: ${({ $nota }) => {
      const notaFloat = Number($nota);
      switch (true) {
        case notaFloat <= 5:
          return "#FF5964";
        case notaFloat <= 7.9:
          return "#FFFF99";
        default:
          return "#05FF00";
      }
    }};;
  }

  p {
    font-family: "Montserrat", "sans-serif";
    font-size: 12px;
    color: ${({ $nota }) => {
      const notaFloat = Number($nota);
      switch (true) {
        case notaFloat <= 5:
          return "#FF5964";
        case notaFloat <= 7.9:
          return "#FFFF99";
        default:
          return "#05FF00";
      }
    }};
  }
`;
