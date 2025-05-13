import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({
    type : DataType.STRING,
    unique : true
  })
  email : string
  

  @Column({ defaultValue: true })
  isActive: boolean;
}