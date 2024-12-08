import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  //10*****---------------------complex start CRUD operation

  private todos=[]

      @Post('/postTodoCRUD')//http://localhost:3000/todo/postTodoCRUD
      postTodoCRUD(@Body() data:CreateTodo){
        const item = {
            _id: new Date().getTime(),
            ...data,
            createdAt: new Date().toLocaleString()
        }
        
        this.todos.push(item)
        
        return {
            message:'todo is created CRUD'
        }
      }    

   @Get('/getTodoCRUD')//http://localhost:3000/todo/getTodoCRUD
   getTodoCRUD(){
    return {
        todos:this.todos,
        total:this.todos.length,
        message:"Todo's fetched successfully!"
    }
  }


  @Put('/updateTodoCRUD/:_id')//http://localhost:3000/todo/updateTodoCRUD/1
  updateTodoCRUD(@Param('_id') _id: number, @Body() data) {
    /* return {     ////http://localhost:3000/todo/updateTodoCRUD/1    return same id that you passed in param
        _id,
        }; 
    */
     

    const updatedTodos= this.todos.map((value,index)=>{
        if(value._id==_id){   //body k data ki _id match hojaye too update kr k return warna direct nichy return 
            return{
                ...value,
                ['name']:data.name //body data
            }
        }
        return value
    })

    this.todos=updatedTodos
    return {
        message:'todo is updated'
    }
}

    @Delete('/deleteTodoCRUD/:_id')// http://localhost:3000/todo/deleteTodoCRUD/1733694762719
    deleteTodoCRUD(@Param('_id') _id:number){
        const updatedTodos=this.todos.filter((value)=>value._id != _id)//compare _id krna hai yaad rhy
        this.todos=updatedTodos
        return{
            _id,
            message:'todo is delete successfully!'
        }
    }
}


