import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcDashboardRoutingModule } from './pc-dashboard-routing.module';
import { PcDashboardComponent } from './pc-dashboard.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [PcDashboardComponent],
    imports: [CommonModule, PcDashboardRoutingModule, SharedModule, NgbProgressbarModule, NgbNavModule]
})
export class PcDashboardModule {}
