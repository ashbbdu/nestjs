import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ash@Compunnel09',
      database: 'test-nestjs',
      // entities: [],
      synchronize: true,
      autoLoadModels: true,
      models : [User]
    }),
  
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}

