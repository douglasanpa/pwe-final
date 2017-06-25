import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProdutoListComponent } from './pedido-produto-list.component';

describe('PedidoProdutoListComponent', () => {
  let component: PedidoProdutoListComponent;
  let fixture: ComponentFixture<PedidoProdutoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoProdutoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProdutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
