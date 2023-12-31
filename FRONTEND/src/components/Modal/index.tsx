import { useState, ChangeEvent } from "react";
import { globalTypes } from "../../types/globalTypes";
import { Buttons } from "./data";
import { IoClose } from "react-icons/io5";
import {
  AreaButtonSubmitModal,
  AreaButtons,
  BoxModal,
  BtnCloseModal,
  ButtonOption,
  ButtonSubmitModal,
  Container,
  DisciplinaOptions,
  HeaderModal,
  InputNotaArea,
  TitleModal,
} from "./styles";

import useInsertStudentResult from "../../hooks/useCreateData";

export default function Modal({
  $show,
  title,
  selectedBimestre,
  onClose,
}: Partial<globalTypes>) {

  const [nota, setNota] = useState("");
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [selectedButton, setSelectedButton] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { insertStudentResult } = useInsertStudentResult();

  const handleDisciplinaChange = (disciplina: string) => {
      setSelectedDisciplina(disciplina);
      setSelectedButton(disciplina);
  };

  const handleNotaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNota(e.target.value);
  };


  const isValid = parseFloat(nota) >= 0 && parseFloat(nota) <= 10;

  const handleConfirm = async () => {
    try {
      setLoading(true);
  
      if (selectedBimestre) {
        await insertStudentResult(selectedBimestre, selectedDisciplina, parseFloat(nota));
      }
  
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $show={$show}>
      <BoxModal>
        <HeaderModal>
          <TitleModal>{title}</TitleModal>

          <BtnCloseModal onClick={onClose}>
            <IoClose />
          </BtnCloseModal>
        </HeaderModal>

        <DisciplinaOptions>
          <p>Disciplina</p>

          <AreaButtons>
            {Buttons.map((data, index) => (
              <ButtonOption
                $color={data.Bgcolor}
                key={index}
                onClick={() => handleDisciplinaChange(data.value)}
                className={selectedDisciplina === data.value ? "selected" : ""}
                $isSelected={selectedButton === data.value}
              >
                <p>{data.value}</p>
              </ButtonOption>
            ))}
          </AreaButtons>
        </DisciplinaOptions>

        <InputNotaArea>
          <label htmlFor="nota">
            <p>Nota</p>
          </label>

          <input
            id="nota"
            type="number"
            min={0}
            max={10}
            value={nota}
            onChange={handleNotaChange}
          />
        </InputNotaArea>

        <AreaButtonSubmitModal>

          <ButtonSubmitModal
            onClick={handleConfirm}
            $disabled={!!isValid}
          >
            {loading ? "Enviando..." : "Confirmar"}
          </ButtonSubmitModal>

        </AreaButtonSubmitModal>
      </BoxModal>
    </Container>
  );
}
