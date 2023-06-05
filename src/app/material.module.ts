import {NgModule} from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
    imports: [
        MatExpansionModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatExpansionModule,
        BrowserAnimationsModule
    ]
})
export class MaterialModule {}