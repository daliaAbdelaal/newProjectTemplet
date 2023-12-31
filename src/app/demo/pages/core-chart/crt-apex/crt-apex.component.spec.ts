import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrtApexComponent } from './crt-apex.component';

describe('CrtApexComponent', () => {
    let component: CrtApexComponent;
    let fixture: ComponentFixture<CrtApexComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CrtApexComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CrtApexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
