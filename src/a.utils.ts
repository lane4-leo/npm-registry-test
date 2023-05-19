import {Injectable} from "@nestjs/common";

@Injectable()
export class AUtils  {
    public static APrintTest() {
        console.log('A Print Test 입니다.')
        return 'A Print Test';
    }
}