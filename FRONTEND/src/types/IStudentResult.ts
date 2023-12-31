
export interface IStudentResult {

    id:string;
    bimestre: 'Primeiro'| 'Segundo' | 'Terceiro' | 'Quarto';
    disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia';
    nota: number;
    criadoEm:Date;
  }