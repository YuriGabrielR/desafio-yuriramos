import { Router } from "express";
import StudentResult from "./controllers/StudentResultController";

const routes = Router(); 

const studentResult = new StudentResult();


routes.get('/results', studentResult.getAll);
routes.post('/newresult', studentResult.add);
routes.delete('/result/:id', studentResult.delete);


export default routes;



