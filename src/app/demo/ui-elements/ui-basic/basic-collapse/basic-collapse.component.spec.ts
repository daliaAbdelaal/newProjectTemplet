import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicCollapseComponent } from './basic-collapse.component';

describe('BasicCollapseComponent', () => {
    let component: BasicCollapseComponent;
    let fixture: ComponentFixture<BasicCollapseComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [BasicCollapseComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicCollapseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
