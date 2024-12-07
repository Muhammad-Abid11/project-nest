import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
/*   getHello(): string {
    return this.appService.getHello();
  } */

  //*2* since we have pass object from app.service so I remove its type 
  getHello() {
    return this.appService.getHello();
  }
  
  @Get('/login') //http://localhost:3000/login
  loginFunc() {
    // if we return nothing then the screen is white 
    // and body is empty
    //return "Hello World" //like document render on screen
    //return "<h1>Hello World</h1>" //like document render on screen
    return {
      'name':"Ali"
    }

    //Alert-Knowledge: it automaticallly detect content-type
    //if we same routes multiple time then its access top-most
  }

  @Get('/register') //24:00 //http://localhost:3000/register
  loginFun(){
    return{
      name:"I am register path"
    }
  }


}
