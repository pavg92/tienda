import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtiComponent } from './list-arti.component';

describe('ListArtiComponent', () => {
  let component: ListArtiComponent;
  let fixture: ComponentFixture<ListArtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
