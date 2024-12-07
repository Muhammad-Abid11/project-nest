import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';

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

export class TodoModule {}
