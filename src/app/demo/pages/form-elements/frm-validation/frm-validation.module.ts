import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmValidationRoutingModule } from './frm-validation-routing.module';
import { FrmValidationComponent } from './frm-validation.component';
import { SharedModule } from '../../../../theme/shared/shared.module';

@NgModule({
    imports: [CommonModule, FrmValidationRoutingModule, SharedModule],
    declarations: [FrmValidationComponent]
})
export class FrmValidationModule {}
