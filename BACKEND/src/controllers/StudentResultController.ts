import { Request, Response } from "express";

import  {studentSchema}  from "../models/Student";

class StudentResult{

    async getAll(req: Request, res: Response){

      try {

        const results = await studentSchema.findMany();

        res.status(200).json(results); 

      } catch (err) {
        
        res.status(400).json({
            message: 'Erro na requisição', 
            error: err,
        
        });
      };


    };

    async add(req: Request, res: Response){

        const {bimestre, disciplina, nota} = req.body;
        
        try {
        
            const validBimestres = 
            ['Primeiro', 'Segundo', 'Terceiro', 'Quarto'];


            if (!validBimestres.includes(bimestre)) {
                throw new Error('Bimestre inválido.');
                
            };
        
            const validDisciplinas = ['Biologia', 'Artes', 'Geografia', 'Sociologia'];

            if (!validDisciplinas.includes(disciplina)) {
                throw new Error('Disciplina inválida.');
                
            };


            if (nota < 0 || nota > 10) {

                throw new Error('A nota deve estar entre 0 e 10.');

            };

            const existingResult = await studentSchema.findFirst({
                where:{
                    bimestre,
                    disciplina
                }
            });

            if(existingResult){
                throw new Error(`Já existe um lançamento da disciplina ${disciplina} no ${bimestre} bimestre!.`);

            };

            const notaFloat = parseFloat(nota);
            
            const newResult = await studentSchema.create({
                data:{
                    bimestre,
                    disciplina,
                    nota: notaFloat,
                },
            });


            res.status(200).json({
                message: 'Novo resultado criado!',
                data: newResult,
        
            }); 


        } catch (err) {
            
            res.status(400).json({
                
                message:"Os dados fornecidos são inválidos",
                error: err.message,
        });

        };

    };


    async delete(req: Request, res: Response){

        const {id} = req.params;

        try {

            const existingResult = await studentSchema.findUnique({
                where:{
                    id
                }
            });
            
            if(!existingResult){
                throw new Error('Resultado não encontrado. Não é possível excluir o registro informado.');

            };

            const deleteResult = await studentSchema.delete({
                where:{
                    id
                }
            }); 

            res.status(200).json({
                message: 'Resultado excluído com sucesso', 
                data: deleteResult
            });


        } catch (err) {
            res.status(400).json({
                message: 'Erro ao excluir o resultado.',
                error: err.message,
            });
        };

    };
};


export default StudentResult;