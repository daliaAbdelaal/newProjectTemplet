import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospPatientComponent } from './hosp-patient.component';

describe('HospPatientComponent', () => {
    let component: HospPatientComponent;
    let fixture: ComponentFixture<HospPatientComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [HospPatientComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HospPatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
