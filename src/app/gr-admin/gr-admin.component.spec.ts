import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrAdminComponent } from './gr-admin.component';

describe('GrAdminComponent', () => {
  let component: GrAdminComponent;
  let fixture: ComponentFixture<GrAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
