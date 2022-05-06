import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./student.entity";

@Entity({
    name: "attendance",
})
export class Attendance {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Student)
    public student: Student;

    @Column({ type: "timestamp" })
    public time: Date;
}
