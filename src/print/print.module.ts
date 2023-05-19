import {Module} from '@nestjs/common';
import {PrintService} from './print.service';
import {BUtils} from "../b.utils";

@Module({
    providers: [PrintService,BUtils],
    exports: [PrintService,BUtils]
})
export class PrintModule {
}
