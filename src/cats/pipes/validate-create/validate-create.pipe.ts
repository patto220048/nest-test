import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('inside pipe')
    console.log(value)
    console.log(metadata)
    return value;
  }
}
