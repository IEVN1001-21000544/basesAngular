import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacooComponent } from './zodiacoo.component';

describe('ZodiacooComponent', () => {
  let component: ZodiacooComponent;
  let fixture: ComponentFixture<ZodiacooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZodiacooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiacooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
