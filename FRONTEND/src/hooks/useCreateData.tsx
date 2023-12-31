import { useState } from "react";
import api from "../services/api";

const useInsertStudentResult = () => {
  const [loading, setLoading] = useState(false);

  const insertStudentResult = async (
    bimestre: string,
    disciplina: string,
    nota: number
  ) => {

    try {
      setLoading(true);
      const response = await api.post("/newresult", {
        bimestre,
        disciplina,
        nota,
      });

      console.log("Resposta do servidor:", response.data);

    } catch (error) {

      console.error("Erro ao enviar dados:", error);
      
    } finally {
      setLoading(false);
    }
  };

  return { loading, insertStudentResult };
};

export default useInsertStudentResult;