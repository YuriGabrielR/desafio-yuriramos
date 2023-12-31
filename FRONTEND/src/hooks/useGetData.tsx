import { useEffect, useState } from "react";
import { IStudentResult } from "../types/IStudentResult";
import api from "../services/api";

const useGetStudentsResults = () => {
  const [results, setResults] = useState<IStudentResult[]>([]);

  const refetch = async () => {
    try {
      const response = await api.get("/results");
      setResults(response.data);

    } catch (error) {
      window.alert(`Erro ao carregar dados: ${error}`);

    }
  };

  useEffect(() => {
    refetch();
  }, [results]); 

  return { results, refetch };
};

export default useGetStudentsResults;