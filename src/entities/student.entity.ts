import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "students",
})
export class Student {
    @PrimaryGeneratedColumn()
    public rollno: number;

    @Column()
    public name: string;

    @Column()
    public class: number;

    @Column()
    public age: number;
}
