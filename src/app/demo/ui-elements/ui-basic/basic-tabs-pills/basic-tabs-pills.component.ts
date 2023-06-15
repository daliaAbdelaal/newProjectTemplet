import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-basic-tabs-pills',
    templateUrl: './basic-tabs-pills.component.html',
    styleUrls: ['./basic-tabs-pills.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BasicTabsPillsComponent implements OnInit {
    active = 1;
    activePills = 4;
    activeVetical = 'top';

    constructor() {}

    ngOnInit() {}
}
