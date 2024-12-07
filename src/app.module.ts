import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [
    AppController,
    //TodoController //3***auto import q k command k through humne contorller create kiya hai
    //7*****------humne 7 step me todo k apna module bana k whn import kiya hai sb to yhn sy hatao---------------
  ],
  providers: [
    AppService,
    //TodoService //5*****---------------------
    //7*****------humne 7 step me todo k apna module bana k whn import kiya hai sb to yhn sy hatao---------------    
],
})
export class AppModule {}
