import { Injectable } from '@nestjs/common';
import * as process from "process";

@Injectable()
export class PrintService {
      public PrintTest() {
          console.log(process.env.PRINT_TEST);
        console.log('print test 입니다.')
        return 'print test';
    }
}
