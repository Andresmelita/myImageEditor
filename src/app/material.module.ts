import {NgModule} from '@angular/core'
import { MatButtonToggleModule, MatButtonToggle } from '@angular/material/button-toggle'
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component'


@NgModule({
    imports: [
        MatButtonToggleModule, 
        ButtonToggleComponent
    ],
    exports: [
        MatButtonToggleModule,
        ButtonToggleComponent
    ]
})
export class MaterialModule {}