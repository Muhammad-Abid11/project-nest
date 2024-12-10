import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';//types

//11*****---------------------Middleware
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('middleware is running....',req.path)  //it is not running until it connect 
                                          //  with specific module i.e todo.module.ts
    next();
  }
}
