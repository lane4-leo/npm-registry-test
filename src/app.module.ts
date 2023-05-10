import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {PrintModule} from "./print/print.module";

@Module({
    imports: [PrintModule],
    providers: [AppService],
    exports: [PrintModule]
})
export class AppModule {
}
