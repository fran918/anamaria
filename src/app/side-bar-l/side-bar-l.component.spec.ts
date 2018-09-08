import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLComponent } from './side-bar-l.component';

describe('SideBarLComponent', () => {
  let component: SideBarLComponent;
  let fixture: ComponentFixture<SideBarLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
