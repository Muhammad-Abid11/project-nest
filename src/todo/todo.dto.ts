//9*****---------------------complex start
// https://docs.nestjs.com/pipes#class-validator


import { IsString, IsInt, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateTodo {
  //@IsNotEmpty() // decorator, this will limit name is never be an empty value
  @IsNotEmpty({message:"Name zarori hai"}) //error text change
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

/* ------expected-data in post-request 
http://localhost:3000/todo/postTodoData
  {
    "name":"abid",
    "email":"abidkhan@gmail.com"
  }
*/
}
