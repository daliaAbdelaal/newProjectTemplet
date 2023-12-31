import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpEmailComponent } from './mshp-email.component';

describe('MshpEmailComponent', () => {
    let component: MshpEmailComponent;
    let fixture: ComponentFixture<MshpEmailComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [MshpEmailComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MshpEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
