import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthResetPasswordComponent } from './auth-reset-password.component';

describe('AuthResetPasswordComponent', () => {
    let component: AuthResetPasswordComponent;
    let fixture: ComponentFixture<AuthResetPasswordComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AuthResetPasswordComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
