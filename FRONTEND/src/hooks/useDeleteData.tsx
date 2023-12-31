import useGetStudentsResults from "./useGetData";
import api from "../services/api";

const useDeleteStudentResult = () => {
  const { refetch } = useGetStudentsResults();

  const deleteStudentResult = async (id: string) => {
    try {
      await api.delete(`/result/${id}`);
      
    } catch (err) {
      console.error(`Erro ao deletar lançamento: ${err}`);
      window.alert(`Erro ao deletar lançamento: ${err}`);

    } finally {
      refetch();
    }
  };

  return { deleteStudentResult };
};

export default useDeleteStudentResult;
