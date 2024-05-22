import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaisComponent } from './login-pais.component';

describe('LoginPaisComponent', () => {
  let component: LoginPaisComponent;
  let fixture: ComponentFixture<LoginPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
