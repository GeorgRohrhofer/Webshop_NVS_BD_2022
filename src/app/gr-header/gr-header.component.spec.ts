import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrHeaderComponent } from './gr-header.component';

describe('GrHeaderComponent', () => {
  let component: GrHeaderComponent;
  let fixture: ComponentFixture<GrHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
