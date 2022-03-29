import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrShopComponent } from './gr-shop.component';

describe('GrShopComponent', () => {
  let component: GrShopComponent;
  let fixture: ComponentFixture<GrShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
