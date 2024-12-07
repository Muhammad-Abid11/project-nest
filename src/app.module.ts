import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    TodoController //3*** import q k command k through humne contorller create kiya hai
  ],
  providers: [
    AppService,
    TodoService //5*****---------------------
],
})
export class AppModule {}
