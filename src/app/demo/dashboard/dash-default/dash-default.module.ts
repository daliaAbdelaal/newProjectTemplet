import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [DashDefaultComponent],
    imports: [CommonModule, DashDefaultRoutingModule, SharedModule, AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBBek1t8M1zQ6TJtFV405GCUBcj_zTjwCs'
    })]
})
export class DashDefaultModule {}
