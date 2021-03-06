import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  time: Date;

  @Column()
  from: number;

  @Column()
  to: number;

  @Column()
  type: string;
}
