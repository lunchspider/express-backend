import { Router, Request, Response } from "express";
import { Student } from "../entities/student.entity";
import { getRepository } from "typeorm";

export class StudentController {
    public path = "/students";
    public router = Router();
    public studentRepository = getRepository(Student);

    constructor() {
        this.router.get(this.path, this.getStudents);
        this.router.post(this.path, this.createStudent);
        this.router.get(`${this.path}/:rollno`, this.getStudent);
        this.router.delete(`${this.path}/:rollno`, this.deleteStudent);
    }

    getStudents = async (req: Request, res: Response) => {
        let students = await this.studentRepository.find();
        return res.send(students);
    };

    createStudent = async (req: Request, res: Response) => {
        try {
            const student = req.body as Student;
            await this.studentRepository.save(student);
            res.json({ ok: true, message: "Student saved!" });
        } catch (e) {
            console.log(e);
            res.json({ ok: false, message: "Error in creating student" });
        }
    };
    getStudent = async (req: Request, res: Response) => {
        let rollno = Number(req.params.rollno);
        let student = await this.studentRepository.findOne(rollno);
        return res.send(student);
    };
    deleteStudent = async (req: Request, res: Response) => {
        let rollno = Number(req.params.rollno);
        let student = await this.studentRepository.delete({ rollno : rollno});
        return res.send(student);
    };
}
