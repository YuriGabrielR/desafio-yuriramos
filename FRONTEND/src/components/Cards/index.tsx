import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { Card, CardsArea, NotaInfo, SubjectDateInfo } from "./styles";
import { IStudentResult } from "../../types/IStudentResult";
import { formatDate } from "../utils/formatDate";
import useGetStudentsResults from "../../hooks/useGetData";
import useDeleteStudentResult from "../../hooks/useDeleteData";
import { useState } from "react";

type CardsProps = {
  results: IStudentResult[];
};

export default function Cards({ results }: CardsProps) {
  const { deleteStudentResult } = useDeleteStudentResult();
  const { refetch } = useGetStudentsResults();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async (id: string) => {
    try {
      setIsDeleting(true);
      await deleteStudentResult(id);
    } catch (error) {
      console.error(`Erro ao deletar lançamento: ${error}`);
      window.alert(`Erro ao deletar lançamento: ${error}`);
    } finally {
      setIsDeleting(false);
      refetch();
    }
  };

  return (
    <>
      {isDeleting && (
        <p style={{ color: "white", fontFamily: "Montserrat" }}>
          Deletando...🚮
        </p>
      )}
      <CardsArea>
        {results?.map((data, index) => (
          <Card $disciplina={data.disciplina} key={index}>
            <SubjectDateInfo>
              <h3>{data.disciplina}</h3>
              <p>{formatDate(data.criadoEm)}</p>
            </SubjectDateInfo>

            <NotaInfo $nota={data.nota}>
              <MdOutlineAnalytics />
              <p> Nota: {data.nota}</p>
            </NotaInfo>

            <span></span>

            <button onClick={() => handleDeleteClick(data.id)}>
              <FaRegTrashAlt />
            </button>
          </Card>
        ))}
      </CardsArea>
    </>
  );
}
