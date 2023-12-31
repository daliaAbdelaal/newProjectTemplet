import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeRtlVComponent } from './theme-rtl-v.component';

describe('ThemeRtlVComponent', () => {
    let component: ThemeRtlVComponent;
    let fixture: ComponentFixture<ThemeRtlVComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ThemeRtlVComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ThemeRtlVComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
