import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Todos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  done: boolean;
}
