import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistaciaComponent } from './distacia.component';

describe('DistaciaComponent', () => {
  let component: DistaciaComponent;
  let fixture: ComponentFixture<DistaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistaciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
