import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
//5*****---------------------

    serviceFoo(){
        return{
            service:"todo's services is now working by importing it in app.modules and todo.controller"
        }
    }
}
