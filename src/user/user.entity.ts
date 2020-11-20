import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IUser} from "./interfaces";

@Entity({schema: "test", name: "user"})
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({type: "varchar"})
  public email: string;

  @Column({type: "varchar", select: false})
  public password: string;
}
