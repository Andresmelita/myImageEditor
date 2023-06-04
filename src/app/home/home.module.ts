import {NgModule} from '@angular/core'
import { RemoveBackGroundComponent } from '../components/remove-back-ground/remove-back-ground.component'

@NgModule({
    imports: [
        RemoveBackGroundComponent,
    ],
    exports: [
        RemoveBackGroundComponent
    ]
})
export class HomeModule {}