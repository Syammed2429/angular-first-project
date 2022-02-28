import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexeipeItemComponent } from './rexeipe-item.component';

describe('RexeipeItemComponent', () => {
  let component: RexeipeItemComponent;
  let fixture: ComponentFixture<RexeipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexeipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexeipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
