import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereosComponent } from './hereos.component';

describe('HereosComponent', () => {
  let component: HereosComponent;
  let fixture: ComponentFixture<HereosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HereosComponent]
    });
    fixture = TestBed.createComponent(HereosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
