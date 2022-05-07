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
}
