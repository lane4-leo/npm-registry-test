import {Module} from '@nestjs/common';
import {PrintService} from './print.service';
import {BUtils} from "../b.utils";
import {AUtils} from "../a.utils";

@Module({
    providers: [PrintService,AUtils,BUtils],
    exports: [PrintService,BUtils]
})
export class PrintModule {
}
