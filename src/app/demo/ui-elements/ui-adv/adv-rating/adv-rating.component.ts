import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-adv-rating',
    templateUrl: './adv-rating.component.html',
    styleUrls: ['./adv-rating.component.scss']
})
export class AdvRatingComponent implements OnInit {
    public rateDefault = 1;
    public rateFa = 1;
    public rateFao = 5.6;
    public rateMovie = 2;
    public rateHorizontal = 7;
    public rateVertical = 1;
    public rateStar = 5;
    public rateSquare = 2;

    constructor() {}

    ngOnInit() {}
}
