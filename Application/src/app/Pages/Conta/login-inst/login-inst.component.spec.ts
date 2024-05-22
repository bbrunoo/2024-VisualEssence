import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstComponent } from './login-inst.component';

describe('LoginInstComponent', () => {
  let component: LoginInstComponent;
  let fixture: ComponentFixture<LoginInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
