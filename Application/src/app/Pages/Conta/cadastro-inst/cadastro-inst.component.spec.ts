import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInstComponent } from './cadastro-inst.component';

describe('CadastroInstComponent', () => {
  let component: CadastroInstComponent;
  let fixture: ComponentFixture<CadastroInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroInstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
