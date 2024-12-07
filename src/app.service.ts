import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
//  -----------------------
  /* getHello(): string {
    return 'Hello World';
  } */

//  -----------------------*2*
  getHello(){
    return {
      'name':"Hello Object"
    }
  }

//4****----------------------    

  createTodo(){
    return{
      name:"Todo service worker used in Todo-Controller"
    }
  }
}
