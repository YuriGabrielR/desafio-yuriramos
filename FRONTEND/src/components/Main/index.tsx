import { Bimestres } from "./data";
import { FiPlus } from "react-icons/fi";
import Cards from "../Cards";
import { Wrapper, BimestreBoxArea, HeaderBox, Title, Button } from "./styles";
import { useState } from "react";
import Modal from "../Modal";
import useGetStudentsResults from "../../hooks/useGetData";
import { IStudentResult } from "../../types/IStudentResult";

type ResultsData = {
  results: IStudentResult[];
};
export default function Main() {
  const [selectedBimestre, setSelectedBimestre] = useState<string | null>(null);

  const [modalTitle, setModalTitle] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = (bimestreValue: string, bimestreTitle: string) => {
    setSelectedBimestre(bimestreValue);
    setModalTitle(bimestreTitle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBimestre(null);
    setShowModal(false);
  };

  const resultsData: ResultsData = useGetStudentsResults();

  return (
    <Wrapper>
      {Bimestres.map((data, index) => (
        <BimestreBoxArea key={index}>
          <HeaderBox>
            <Title>{data.bimestreTitle}</Title>
            <Button
              onClick={() =>
                handleOpenModal(data.bimestreValue, data.bimestreTitle)
              }
            >
              Lançar nota <FiPlus />
            </Button>
          </HeaderBox>

          <Cards
            results={resultsData.results.filter(
              (result) => result.bimestre === data.bimestreValue
            )}
          />

          {showModal && selectedBimestre === data.bimestreValue && (
            <Modal
              title={modalTitle}
              $show={showModal}
              onClose={handleCloseModal}
              selectedBimestre={selectedBimestre}
            />
          )}
        </BimestreBoxArea>
      ))}
    </Wrapper>
  );
}
