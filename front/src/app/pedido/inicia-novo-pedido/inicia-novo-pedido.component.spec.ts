import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaNovoPedidoComponent } from './inicia-novo-pedido.component';

describe('IniciaNovoPedidoComponent', () => {
  let component: IniciaNovoPedidoComponent;
  let fixture: ComponentFixture<IniciaNovoPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciaNovoPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaNovoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
