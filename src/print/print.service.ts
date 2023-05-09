import { Injectable } from '@nestjs/common';

@Injectable()
export class PrintService {
      public PrintTest() {
        console.log('print test 입니다.')
        return 'print test';
    }
}
