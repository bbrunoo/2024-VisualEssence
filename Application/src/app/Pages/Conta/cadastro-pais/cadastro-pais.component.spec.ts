import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPaisComponent } from './cadastro-pais.component';

describe('CadastroPaisComponent', () => {
  let component: CadastroPaisComponent;
  let fixture: ComponentFixture<CadastroPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
