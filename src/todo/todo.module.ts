import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';
import { AuthenticationMiddleware } from 'src/authentication/authentication.middleware';

//7*****------humne 7 step me todo k apna module bana k whn import kiya hai sb to yhn sy hatao---------------    
@Module({
    controllers:[
        TodoController
    ],
    providers:[
        TodoService,
        AppService
    ]
})

// export class TodoModule {}  //agar apne middleware use nhi krna hai too is line ko un-comment kr k nichy k code ko comment krdo

//11*****---------------------Middleware
export class TodoModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthenticationMiddleware)
          //.forRoutes('todo'); //for all todoroute k liye ye middleware run kro. ab is route ko hit kro middleware works
          .forRoutes('todo/getTodoCRUD') //   http://localhost:3000/todo/getTodoCRUD
      }
}