import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcProjectRoutingModule } from './pc-project-routing.module';
import { PcProjectComponent } from './pc-project.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [PcProjectComponent],
    imports: [
        CommonModule,
        PcProjectRoutingModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        TagInputModule,
        TinymceModule,
        NgbNavModule
    ]
})
export class PcProjectModule {}
