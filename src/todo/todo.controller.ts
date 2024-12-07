import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TodoService } from './todo.service';
import { CreateTodo } from './todo.dto';

//3***----------------------------------------
@Controller('todo')//decorator
    //todo here is like 'localhost:3000/todo/abc'
    //means k ab "todo" ab URl k path ban jayega

    // Alert-Know:
        // Hum is file me koye bhi route create krengy wo web reflect ho
        //q k ye controller 'app.module.ts' me import ho kr k connect hojata hai
        //jb hum command k through controller create krty hen


    export class TodoController {

        //*****5 */
        @Get()    //http://localhost:3000/todo/getTodos/
        getTodos_1(){
            // return this.todoService.rootPath //it gives body of function
            return this.todoService.rootPath() 
        }
    

    @Get('/getTodos')    //http://localhost:3000/todo/getTodos/
    getTodos(){
        return{
            msg:"Get Todos successfully"
        }
    }

    //4****
    constructor( //best paractice constructor always be upside
        private appservice:AppService,
        
        //5*****---------------------
        private todoService:TodoService
        
    ){}
    @Get('/createTodos')//http://localhost:3000/todo/createTodos/
    createTodo(){
        return this.appservice.createTodo()
    }
    // @Get('/createTodos') //Alert yhn . nhi aye warna route disturb hoga

//5*****---------------------

    @Get('/todoService')//http://localhost:3000/todo/todoService
    getServiceTodo(){
        return this.todoService.serviceFoo()
    }

//8*****---------------------post request

      @Post('/postTodo')//http://localhost:3000/todo/postTodo
      postTodo(){
        return{
            data:'data created successfully!'
        }
      }

     //test the above request in "post" method

     @Post('/postTodoData')//http://localhost:3000/todo/postTodoData
     postTodoWithData(@Body() data:CreateTodo){ //CreateTodo is validator 9*****
        
        // Body (in postman/thunderClient send data)
        // {
        //    "name":"Ali",
        //    "age":23,
        //    "array":["abc","xyz"]
        // }

        
        // return data // both works display ---> object
        return `data created successfully! ${data.name}` //both works display sentence
      }

}


