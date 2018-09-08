import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarRComponent } from './side-bar-r.component';

describe('SideBarRComponent', () => {
  let component: SideBarRComponent;
  let fixture: ComponentFixture<SideBarRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
