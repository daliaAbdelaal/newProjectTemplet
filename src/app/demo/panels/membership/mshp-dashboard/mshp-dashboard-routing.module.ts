import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MshpDashboardComponent } from './mshp-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: MshpDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MshpDashboardRoutingModule {}
