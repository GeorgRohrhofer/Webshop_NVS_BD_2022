import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrWarenkorbComponent } from './gr-warenkorb.component';

describe('GrWarenkorbComponent', () => {
  let component: GrWarenkorbComponent;
  let fixture: ComponentFixture<GrWarenkorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrWarenkorbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrWarenkorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
