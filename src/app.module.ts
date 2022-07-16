import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass123',
    database: 'wechat',
    autoLoadEntities: true,
    synchronize: true
  }), UsersModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
