import { Group } from "src/groups/entities/group.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  email: string;

  @Column()
  pass: string;

  @JoinTable()
  @ManyToMany(type => User, user => user.friends)
  friends: User[];

  @ManyToMany(type => Group, group => group.members)
  groups: Group[];
}
