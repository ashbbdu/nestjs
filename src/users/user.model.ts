import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName : "Users",
    timestamps: true,
    
})
export class User extends Model {
  @Column
  declare first_name: string;

  @Column
  declare last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 200],
        msg: 'Passoword must be between 6 and 20 characters',
      },
      notNull: { msg: 'Password is required' },
    },
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 10],
        msg: 'User code must be between 2 and 20 characters',
      },
      notNull: { msg: 'User Code is required' },
    },
  })
  declare user_code: string;

  @Column({ defaultValue: true })
  declare is_active: boolean;
}
