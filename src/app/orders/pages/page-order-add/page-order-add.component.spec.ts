import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderAddComponent } from './page-order-add.component';

describe('PageOrderAddComponent', () => {
  let component: PageOrderAddComponent;
  let fixture: ComponentFixture<PageOrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOrderAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
