import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// 12*****---------------------Pipes
@Injectable()
export class TodoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value._id+='Id_Changed by pipe'
    
    return value;
  }
}
