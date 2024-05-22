import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcEntrarComponent } from './opc-entrar.component';

describe('OpcEntrarComponent', () => {
  let component: OpcEntrarComponent;
  let fixture: ComponentFixture<OpcEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcEntrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
