import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { GroupsModule } from './groups/groups.module';
import { MessagesModule } from './messages/messages.module';

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
  }), UsersModule, AccountModule, GroupsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
