import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { UsersService } from './users/users.service';
import { ShipmentsController } from './shipments/shipments.controller';
import { ShipmentsService } from './shipments/shipments.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ash@Compunnel09',
      database: 'dashboard-clone',
      // entities: [],  
      synchronize: true,
      autoLoadModels: true,
      models : [User]
    }),
  
    UsersModule,
  ],
  controllers: [AppController, ShipmentsController],
  providers: [AppService, ShipmentsService,],
})
export class AppModule {}

