import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBackGroundComponent } from './remove-back-ground.component';

describe('RemoveBackGroundComponent', () => {
  let component: RemoveBackGroundComponent;
  let fixture: ComponentFixture<RemoveBackGroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveBackGroundComponent]
    });
    fixture = TestBed.createComponent(RemoveBackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
