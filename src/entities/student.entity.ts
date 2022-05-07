import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({
    name: "students",
})
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    public rollno: number;

    @Column()
    public name: string;

    @Column()
    public class: number;

    @Column()
    public age: number;
}
