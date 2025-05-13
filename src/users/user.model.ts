import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  declare firstName: string;

  @Column
  declare lastName: string;

  @Column({
    type : DataType.STRING,
    unique : true
  })
  declare email : string
  

  @Column({ defaultValue: true })
  declare isActive: boolean;
}